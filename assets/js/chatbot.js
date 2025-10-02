let chatbotData = {};
let currentState = 'start';

fetch('assets/js/chatbot-data.json')
    .then(response => response.json())
    .then(data => {
        chatbotData = data;
        initChatbot();
    })
    .catch(error => {
        console.error('Error loading chatbot data:', error);
        chatbotData = {
            "start": {
                "message": "Hi! I'm Gurmol's virtual assistant. What would you like to know?",
                "options": [
                    {"text": "Who is Gurmol?", "next": "who"},
                    {"text": "Contact Info", "next": "contact"}
                ]
            },
            "who": {
                "message": "Gurmol Sohi is a Calgary-based data developer and innovator. Visit the About page to learn more!",
                "options": [
                    {"text": "Back to start", "next": "start"}
                ]
            },
            "contact": {
                "message": "Email: gurmolsofly12@gmail.com\nLinkedIn: linkedin.com/in/gurmol-s",
                "options": [
                    {"text": "Back to start", "next": "start"}
                ]
            }
        };
        initChatbot();
    });

function initChatbot() {
    const toggle = document.getElementById('chatbot-toggle');
    const close = document.getElementById('chatbot-close');
    const window = document.getElementById('chatbot-window');

    toggle.addEventListener('click', () => {
        window.classList.add('active');
        if (currentState === 'start') {
            displayMessage(currentState);
        }
    });

    close.addEventListener('click', () => {
        window.classList.remove('active');
    });

    displayMessage('start');
}

function displayMessage(state) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const optionsContainer = document.getElementById('chatbot-options');

    if (!chatbotData[state]) {
        console.error('Invalid state:', state);
        return;
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.textContent = chatbotData[state].message;
    messagesContainer.appendChild(messageDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    optionsContainer.innerHTML = '';

    chatbotData[state].options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'chatbot-option';
        button.textContent = option.text;
        button.addEventListener('click', () => {
            currentState = option.next;
            displayMessage(option.next);
        });
        optionsContainer.appendChild(button);
    });
}
