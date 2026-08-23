const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;
const FOOTBALL_API_KEY = process.env.FOOTBALL_API_KEY;
const META_AI_KEY = process.env.META_AI_KEY;

// Vérification Webhook Meta
app.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = "footia2026";
  if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === VERIFY_TOKEN) {
    return res.send(req.query['hub.challenge']);
  }
  res.sendStatus(403);
});

// Réception des messages
app.post('/webhook', async (req, res) => {
  const message = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  if (message) {
    const from = message.from;
    const text = message.text.body;
    const reply = await getAIResponse(text);
    await sendWhatsAppMessage(from, reply);
  }
  res.sendStatus(200);
});

async function getAIResponse(userMessage) {
  const prompt = `Tu es Footia, un assistant foot. Réponds en français, court et sympa. Question: ${userMessage}`;
  const response = await axios.post('https://api.meta.ai/v1/chat', {
    model: "llama-3.1",
    messages: [{role: "user", content: prompt}]
  }, { headers: { 'Authorization': `Bearer ${META_AI_KEY}` } });
  return response.data.choices[0].message.content;
}

async function sendWhatsAppMessage(to, text) {
  await axios.post(`https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages`, {
    messaging_product: "whatsapp",
    to: to,
    text: { body: text }
  }, { headers: { 'Authorization': `Bearer ${WHATSAPP_TOKEN}` } });
}

app.listen(3000, () => console.log('Bot Footia en ligne'));
