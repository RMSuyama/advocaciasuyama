import fs from 'fs';
import { PDFParse } from 'pdf-parse';

/**
 * Parser especializado para holerites do Governo de SP (e similares).
 */
export async function parseHolerite(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`Arquivo não encontrado: ${filePath}`);
    }

    const dataBuffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: dataBuffer });

    // Extraímos o texto com configurações que preservam melhor a estrutura
    const result = await parser.getText({
        lineEnforce: true,
        lineThreshold: 5,
        cellSeparator: '\t'
    });

    const text = result.text;
    await parser.destroy();

    const itens = extractItens(text);
    const bases = extractTaxBases(text);

    // Lógica de extração baseada no mapeamento do texto extraído
    const data = {
        nome: extractField(text, /Nome\s+(.+)/i),
        mes_referencia: extractField(text, /Mês[\s\d/]*(\d{2}\/\d{4})/i) || extractField(text, /(\d{2}\/\d{4})/),
        valor_liquido: extractNetValue(text),
        instituicao: extractInstitution(text),
        itens: itens,
        bases: bases,
        analise_transporte: checkTransportIncidence(itens, bases),
        raw: text
    };

    return data;
}

function extractItens(text) {
    const itens = [];
    // Padrão: 11/2025 VALOR 7.016,39 + SALARIO BASE N 01.001
    // Também lida com tabulações: 11/2025\tVALOR 7.016,39 +\tSALARIO BASE N\t01.001
    const regex = /(\d{2}\/\d{4})\s+(?:VALOR|PERC\.|QUINQ)\s+([\d.,]+)\s+([+-])\s+([^\t\n1234567890]+)/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
        itens.push({
            mes: match[1],
            valor: formatCurrency(match[2]),
            tipo: match[3], // '+' provento, '-' desconto
            descricao: match[4].trim()
        });
    }
    return itens;
}

function extractTaxBases(text) {
    // Procura por "Salário Contribuição", "Imposto de Renda na Fonte", etc.
    // No texto do Gov SP, as bases as vezes aparecem no rodapé ou antes dos itens
    const bases = {
        previdencia: extractValue(text, /CONTR\.PREVID\.RPPS[\s\S]*?([\d.,]+)/i),
        irpf: extractValue(text, /IMPOSTO DE RENDA NA FONTE[\s\S]*?([\d.,]+)/i)
    };
    return bases;
}

function checkTransportIncidence(itens, bases) {
    const transporte = itens.find(i => i.descricao.includes('TRANSPORTE') || i.descricao.includes('AUX. TRANSPORTE'));

    if (!transporte) return "Auxílio Transporte não encontrado.";

    // No modelo do Governo de SP (RPPS):
    // 70.113 - CONTR.PREVID.RPPS
    // 70.012 - IMPOSTO DE RENDA NA FONTE
    const prev = itens.find(i => i.descricao.includes('70.113') || i.descricao.includes('PREVID.RPPS'));
    const irpf = itens.find(i => i.descricao.includes('70.012') || i.descricao.includes('IMPOSTO DE RENDA'));

    // Cálculo da base teórica: 
    // Somamos os itens que SABEMOS que incidem (Salário Base, VPNI, Quinquênio, Sexta-Parte)
    const itensSujetios = itens.filter(i =>
        i.tipo === '+' &&
        (i.descricao.includes('SALARIO BASE') ||
            i.descricao.includes('VPNI') ||
            i.descricao.includes('QUINQ') ||
            i.descricao.includes('SEXTA-PARTE'))
    );

    const baseSemTransporte = itensSujetios.reduce((acc, curr) => acc + curr.valor, 0);
    const baseComTransporte = baseSemTransporte + transporte.valor;

    // Se o desconto de previdência (geralmente 16% no SP-Previdência) 
    // for maior que 16% da base sem transporte, provavelmente o transporte incidiu.
    const taxaPrev = 0.16;
    const prevEsperadaSem = baseSemTransporte * taxaPrev;
    const prevEsperadaCom = baseComTransporte * taxaPrev;

    const incidePrevidencia = prev && prev.valor > (prevEsperadaSem + 10); // Margem de erro de R$10

    return {
        item: transporte.descricao,
        valor: transporte.valor,
        incide_previdencia: incidePrevidencia,
        analise: incidePrevidencia ?
            "ALERTA: O valor do transporte parece estar aumentando o desconto da Previdência." :
            "OK: O transporte não parece estar sendo tributado pela Previdência (RPPS).",
        base_calculada: baseSemTransporte,
        desconto_observado: prev ? prev.valor : 0
    };
}

function extractValue(text, regex) {
    const match = text.match(regex);
    return match ? formatCurrency(match[1]) : null;
}

function extractField(text, regex) {
    const match = text.match(regex);
    return match ? match[1].trim() : null;
}

function extractNetValue(text) {
    // Tenta encontrar o padrão "9.706,34 8.134,36" (Descontos e Líquido lado a lado)
    // ou o valor logo após "Líquido a Receber"
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('Líquido a Receber' || lines[i].includes('LÍQUIDO'))) {
            // No layout do governo de SP, o valor costuma estar algumas linhas abaixo 
            // ou na mesma linha no final.
            // Vamos procurar o padrão final (X.XXX,XX Y.YYY,YY)
            const nextLines = lines.slice(i, i + 10).join(' ');
            const matches = nextLines.match(/(\d[\d.,]*)\s+(\d[\d.,]*)$/) || nextLines.match(/(\d[\d.,]*)$/);
            if (matches) {
                return formatCurrency(matches[matches.length - 1]);
            }
        }
    }

    // Fallback: procura o último valor grande positivo no texto (que geralmente é o líquido)
    const allPrices = text.match(/(\d{1,3}(\.\d{3})*,\d{2})/g);
    if (allPrices && allPrices.length > 0) {
        return formatCurrency(allPrices[allPrices.length - 1]);
    }

    return null;
}

function formatCurrency(valStr) {
    const val = valStr.replace(/\./g, '').replace(',', '.');
    return parseFloat(val);
}

function extractInstitution(text) {
    if (text.includes('GOVERNO DO ESTADO DE SÃO PAULO')) {
        return 'GOVERNO DO ESTADO DE SÃO PAULO';
    }
    return null;
}
