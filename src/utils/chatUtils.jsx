export const getResponse = () => {
    const botResponse = [
        "Hello! How can I help you today?",
        "I'm doing well, thank you for asking!",
        "That's interesting. Tell me more.",
        "I'm not sure I understand. Could you rephrase that?",
        "Have a great day!",
        "I'm a bot, but I'm here to help!"
    ];
    return botResponse[Math.floor(Math.random() * botResponse.length)];
}

export const formatTime = (date = new Date()) => {
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
};