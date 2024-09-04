const input = document.getElementById('messageInput')
function sendMessage(){
    const messageText = input.value
    
    if(messageText.trim() !== ''){
        const messagesContainer = document.getElementById('messages')
        const newMessage = document.createElement('div')
        newMessage.className = 'message sent'
        newMessage.innerHTML = `<div class="bubble">${messageText}</div>`
        messagesContainer.appendChild(newMessage)
        messagesContainer.scrollTop = messagesContainer.scrollHeight
        input.value = ''

    }
}

input.addEventListener('keypress', (e) => e.key ==="Enter" && sendMessage() )