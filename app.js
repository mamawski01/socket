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

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
