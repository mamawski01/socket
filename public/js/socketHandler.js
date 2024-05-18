import ui from './ui.js';

let socket = null;

function connectToSocketIoServer() {
  try {
    socket = io('/');
    socket.on('connect', () => {
      //automatically connected to the server
      console.log('Successfully connected to server' + socket.id);
    });
    socket.on('group-chat-message', (data) => {
      ui.appendGroupChatMessage(data);
    });
  } catch (error) {
    console.log(error.message);
  }
}

function sendGroupChatMessage(author, messageContent) {
  try {
    const messageData = {
      author,
      messageContent,
    };
    socket.emit('group-chat-message', messageData);
  } catch (error) {
    console.log(error.message);
  }
}

export default { connectToSocketIoServer, sendGroupChatMessage };
