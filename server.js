import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import { readFile } from 'fs/promises';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configuração do Firebase Admin
let firebaseApp;
async function initializeFirebase() {
    try {
        const serviceAccount = JSON.parse(
            await readFile(new URL('./serviceAccountKey.json', import.meta.url))
        );

        firebaseApp = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        console.log('✅ Firebase Admin inicializado com sucesso');
    } catch (error) {
        console.error('❌ Erro ao inicializar Firebase Admin:', error.message);
        console.warn('⚠️  Certifique-se de que o arquivo serviceAccountKey.json está na raiz do projeto.');
    }
}

initializeFirebase();

app.use(cors());
app.use(express.json());

// Rota de Teste (Health Check)
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', firebase: !!firebaseApp });
});

// Exemplo de rota para processar leads
app.post('/api/leads', async (req, res) => {
    const leadData = req.body;

    try {
        if (!firebaseApp) throw new Error('Firebase não inicializado');

        // Exemplo: Salvar no Firestore
        const db = admin.firestore();
        await db.collection('leads').add({
            ...leadData,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        console.log('Lead salvo no Firestore:', leadData);
        res.status(201).json({ message: 'Lead recebido com sucesso' });
    } catch (error) {
        console.error('Erro ao salvar lead:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
