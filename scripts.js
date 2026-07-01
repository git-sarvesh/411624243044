// Variables
let messages = [];
let messageCounter = 0;

// DOM elements
const messageInput = document.getElementById('messageInput');
const addButton = document.getElementById('addButton');
const charCount = document.getElementById('charCount');
const messagesContainer = document.getElementById('messages');
const statusDisplay = document.getElementById('status');
const clearButton = document.getElementById('clearButton');

// Update character count
function updateCharCount() {
    const length = messageInput.value.length;
    charCount.textContent = `${length} characters`;
}

messageInput.addEventListener('input', updateCharCount);

// Display status message
function showStatus(text, type) {
    statusDisplay.textContent = text;
    statusDisplay.className = type;
    setTimeout(() => {
        statusDisplay.textContent = '';
        statusDisplay.className = '';
    }, 4000);
}

// Create message element
function createMessageElement(text, id) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message';
    msgDiv.id = `msg-${id}`;
    msgDiv.textContent = text;
    return msgDiv;
}

// Promise for adding message
function addMessage(text) {
    return new Promise((resolve, reject) => {
        if (text.length >= 3) {
            resolve(text);
        } else {
            reject('Message must contain at least 3 characters');
        }
    });
}

// Auto-remove message after 10 seconds
function scheduleExpiration(msgId, text) {
    setTimeout(() => {
        const msgElement = document.getElementById(`msg-${msgId}`);
        if (msgElement) {
            msgElement.classList.add('expired');
            msgElement.textContent = `${text} (Message Expired)`;
            
            messages = messages.filter(m => m.id !== msgId);
            
            setTimeout(() => {
                if (msgElement.parentNode) msgElement.parentNode.removeChild(msgElement);
            }, 2000);
        }
    }, 10000);
}

// Handle adding message
async function handleAddMessage() {
    const text = messageInput.value.trim();
    
    if (text === '') {
        showStatus('Please enter a message', 'error');
        return;
    }

    try {
        const messageText = await addMessage(text);
        
        const msgObj = { id: ++messageCounter, text: messageText };
        messages.push(msgObj);
        
        const msgElement = createMessageElement(messageText, msgObj.id);
        messagesContainer.appendChild(msgElement);
        
        scheduleExpiration(msgObj.id, messageText);
        
        showStatus('Message Added Successfully', 'success');
        
        messageInput.value = '';
        updateCharCount();
        
    } catch (error) {
        showStatus(error, 'error');
    }
}

// Clear all messages
function clearAllMessages() {
    messages = [];
    messagesContainer.innerHTML = '';
    showStatus('All Messages Cleared', 'success');
}

// Event listeners
addButton.addEventListener('click', handleAddMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAddMessage();
});
clearButton.addEventListener('click', clearAllMessages);

// Initialize
updateCharCount();
showStatus('Ready to add messages!', 'success');