const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello Earth!');
});

const port = process.env.PORT || 1000;

const server = http.createServer(app);

app.use(express.static('public')); // serve static files from public folder;

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/public/about.html');
});

const io = require('socket.io')(server);

let connectedPeers = [];

io.on('connection', (socket) => {
  //automatically connected to the server
  console.log('A user connected ' + socket.id);

  socket.on('group-chat-message', (data) => {
    // socket.broadcast.emit('group-chat-message', data);
    io.emit('group-chat-message', data); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  });

  socket.on('register-new-user', (userData) => {
    const { username } = userData;

    const newPeer = { username, socketId: socket.id };
    connectedPeers = [...connectedPeers, newPeer];
    console.log('registered new user');
    console.log(connectedPeers);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
