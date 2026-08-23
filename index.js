const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json())

// 1. PAGE D'ACCUEIL POUR QUE RENDER DISE "LIVE"
app.get('/', (req, res) => {
  res.send('Footia Bot is Running ✅');
});

const WHATSAPP_TOKEN = process.env.VARIABLE_JETON_WHATSAPP;
const PHONE_NUMBER_ID = process.env.VARIABLE_NUMERO_ID;
const FOOTBALL_API_KEY = process.env.VARIABLE_CLE_FOOTBALL;
const META_AI_KEY = process.env.VARIABLE_META_AI;

// 2. VÉRIFICATION DU WEBHOOK POUR META
app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = "footia2026";
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  if (mode && token === VERIFY_TOKEN) {
    console.log("Webhook verified");
    return res.send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// 3. RÉCEPTION DES MESSAGES WHATSAPP
app.post('/webhook', async (req, res) => {
  const body = req.body;
  
  if (body.object === 'whatsapp_business_account') {
    body.entry.forEach(entry => {
      const changes = entry.changes;
      changes.forEach(change => {
        const message = change.value.messages;
        if (message && message[0].type === 'text') {
          const from = message[0].from;
          const text = message[0].text.body;
          console.log(`Message de ${from}: ${text}`);
          
          // Ici on répondra au message plus tard
        }
      });
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en marche sur le port ${PORT}`);
});const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json())

// 1. PAGE D'ACCUEIL POUR QUE RENDER DISE "LIVE"
app.get('/', (req, res) => {
  res.send('Footia Bot is Running ✅');
});

const WHATSAPP_TOKEN = process.env.VARIABLE_JETON_WHATSAPP;
const PHONE_NUMBER_ID = process.env.VARIABLE_NUMERO_ID;
const FOOTBALL_API_KEY = process.env.VARIABLE_CLE_FOOTBALL;
const META_AI_KEY = process.env.VARIABLE_META_AI;

// 2. VÉRIFICATION DU WEBHOOK POUR META
app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = "footia2026";
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  if (mode && token === VERIFY_TOKEN) {
    console.log("Webhook verified");
    return res.send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// 3. RÉCEPTION DES MESSAGES WHATSAPP
app.post('/webhook', async (req, res) => {
  const body = req.body;
  
  if (body.object === 'whatsapp_business_account') {
    body.entry.forEach(entry => {
      const changes = entry.changes;
      changes.forEach(change => {
        const message = change.value.messages;
        if (message && message[0].type === 'text') {
          const from = message[0].from;
          const text = message[0].text.body;
          console.log(`Message de ${from}: ${text}`);
          
          // Ici on répondra au message plus tard
        }
      });
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en marche sur le port ${PORT}`);
});
