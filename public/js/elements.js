function getChatBox(data) {
  try {
    const { chatBoxLabel, chatBoxMessagesId, chatBoxInputId, chatBoxId } = data;
    const chatBoxContainer = document.createElement('div');
    chatBoxContainer.classList.add('chatbox_container');
    chatBoxContainer.setAttribute('id', chatBoxId);

    chatBoxContainer.innerHTML = ` 
    <div class='chatbox_label_container'>
      <p class='chatbox_label'>${chatBoxLabel}</p>
    </div>
    <div class='messages_container' id='${chatBoxMessagesId}'
      
    </div>
    <div class='new_message_input_container'>
      <input
        type='text'
        class='new_message_input'
        id='${chatBoxInputId}'
        placeholder='Type your message..'
      />
    </div>
              `;
    return chatBoxContainer;
  } catch (error) {
    console.log(error.message);
  }
}

function getGroupChatMessage(data) {
  try {
    const { author, messageContent } = data;
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message_container');
    messageContainer.innerHTML = `
          <p class='message_paragraph'>${author}:
            <span class='message_author'>${messageContent}</span>
          </p>
      `;
    return messageContainer;
  } catch (error) {
    console.log(error.message);
  }
}

export default { getChatBox, getGroupChatMessage };
