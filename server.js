const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('User connecté');
  socket.on('chat message', (msg) => {
    io.emit('chat message', {user: 'Fan', text: msg});
    setTimeout(() => {
      io.emit('chat message', {user: 'Coach IA', text: `Analyse: ${msg}. Score 1-0 🔥`});
    }, 1000);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Serveur lancé sur ${PORT}`));
