import elements from './elements.js';
import socketHandler from './socketHandler.js';
import store from './store.js';

function goToChatPage() {
  try {
    const introductionPage = document.querySelector('.introduction_page');
    const chatPage = document.querySelector('.chat_page');
    introductionPage.classList.add('display_none');
    chatPage.classList.remove('display_none');
    chatPage.classList.add('flex');
    const username = store.getUsername();
    updateUsername(username);
  } catch (error) {
    console.log(error.message);
  }
}

function updateUsername(username) {
  try {
    const usernameLabel = document.querySelector('.username_label');
    usernameLabel.innerHTML = username;
  } catch (error) {
    console.log(error.message);
  }
}

const chatBoxId = 'group-chat-new-input';
const chatBoxMessagesId = 'group-chat-messages';
const chatBoxInputId = 'group-chat-id';

function createGroupChatBox() {
  try {
    const data = {
      chatBoxLabel: 'Group Chat',
      chatBoxMessagesId,
      chatBoxInputId,
      chatBoxId,
    };
    const chatBox = elements.getChatBox(data);
    const chatBoxesContainer = document.querySelector('.chatboxes_container');
    chatBoxesContainer.appendChild(chatBox);

    const newMessageInput = document.getElementById(chatBoxInputId);
    newMessageInput.addEventListener('keydown', (e) => {
      const key = e.key;
      if (key === 'Enter') {
        const author = store.getUsername();
        const messageContent = e.target.value;
        //send message to socket server
        socketHandler.sendGroupChatMessage(author, messageContent);

        newMessageInput.value = '';
      }
    });
  } catch (error) {
    console.log(error.message);
  }
}

function appendGroupChatMessage(data) {
  try {
    const groupChatBoxMessageContainer =
      document.getElementById(chatBoxMessagesId);
    console.log(groupChatBoxMessageContainer);
    const chatMessage = elements.getGroupChatMessage(data);
    groupChatBoxMessageContainer.appendChild(chatMessage);
  } catch (error) {
    console.log(error.message);
  }
}

createGroupChatBox();
export default { goToChatPage, updateUsername, appendGroupChatMessage };
