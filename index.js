require("dotenv").config();
const tmi = require("tmi.js");
var database = require("./cha");

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: process.env.BOT_USER_NAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL],
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  if (!self && message.startsWith("!")) {
    const command = message.slice(1).split(" ").shift().toLowerCase();

    switch (command) {
      case "cha":
        const tea =
          database.teaList[Math.floor(Math.random() * database.teaList.length)];
        client.say(
          channel,
          `${tags.username} você recebeu um chá ${tea} de ${Math.floor(
            Math.random() * 1000
          )}ml. :tea:`
        );
        break;
    }
  }
});
