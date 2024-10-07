const TelegramBot = require('node-telegram-bot-api');
const token = '7431544284:AAGqLFlB0o_jxpFVyQfKMf2DgXqeVEhBPzg';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Bem-vindo ao meu bot!');
});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
});

bot.onText(/\/button/, (msg) => {
    const opts = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Clique aqui', callback_data: 'Clicado'}]
            ]
        }
    };
    bot.sendMessage(msg.chat.id, 'Aqui está um botão:', opts);
});

bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    bot.sendMessage(message.chat.id, 'Você clicou no botão!');
});