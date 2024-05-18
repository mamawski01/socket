import socketHandler from './socketHandler.js';
import store from './store.js';
import ui from './ui.js';

// const socket = io('/');

// socket.on('connect', () => {
//   //automatically connected to the server
//   console.log('Successfully connected to server' + socket.id);
// });

const nameInput = document.querySelector('.introduction_page_name_input');
nameInput.addEventListener('keyup', (e) => {
  store.setUsername(e.target.value);
});

const chatPageButton = document.getElementById('enter_chats_button');
chatPageButton.addEventListener('click', () => {
  ui.goToChatPage();
  socketHandler.connectToSocketIoServer();
});
