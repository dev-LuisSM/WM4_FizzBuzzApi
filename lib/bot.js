const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");
const token = "5375085961:AAGY9ZkjmA87nVb8-M-1UWRm4GdkMEWhTcw";

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];
    bot.sendMessage(chatId, resp);
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.FizzbuzzServiceNumber(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido.");
    }
});

