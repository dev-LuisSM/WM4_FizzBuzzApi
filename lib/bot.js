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
    const messageFromUser = parseInt(msg.text);

    if(!isNaN(messageFromUser)){
        const fizzbuzzTrick = ExplorerController.FizzbuzzServiceNumber(messageFromUser);
        const responseFb = `Tu número es: ${messageFromUser}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseFb);
    } else if (typeof msg.text === "string" && (msg.text === "node" || msg.text === "java")) {
        const getExplorersList = ExplorerController.getExplorersUsernamesByMission(msg.text);
        const explorerList = getExplorersList.join(", ");
        const responseEl = `Los explorers de la misión ${msg.text} son: ${explorerList}`;
        bot.sendMessage(chatId, responseEl);
    } else if(msg.text === "/start"){
        const bienvenida = "Te damos la bienvenida a nuestro bot. Por favor, digita un número o escribe una misión."
        bot.sendMessage(chatId, bienvenida)
    } else {
        bot.sendMessage(chatId, "Envía un número o una misión válida.");
    }
});

