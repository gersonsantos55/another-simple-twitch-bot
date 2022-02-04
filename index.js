require("dotenv").config();
const tmi = require("tmi.js");
const { getTeaMessage, hasTeaCommand } = require("./modules/tea");

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
  if (!self) {
    if (hasTeaCommand(message)) {
      client.say(channel, getTeaMessage(tags.username));
    }
  }
});
