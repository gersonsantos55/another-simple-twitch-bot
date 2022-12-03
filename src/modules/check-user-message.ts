import tmi from "tmi.js";

import { client } from "../index"

const BOT_USERNAMES: string[] = [];

const BLOCKED_WORDS: string[] = [];

export function checkUserMessage(channel: string, userstate: tmi.ChatUserstate, message: string): void {

  if (BOT_USERNAMES.includes(userstate.username as string)) {
    return;
  }

  // To better handle
  message = message.toLowerCase();
  const messageUUID = userstate.id as string;

  // Check if the user's account was created in less than 1 day
  if (Date.now() - userstate.createdAt < 86400000) {
    // Delete the message
    client.deletemessage(channel, messageUUID);

    // Send a message explaining why the message was deleted
    client.say(channel, `@${userstate.username}, your message was deleted because your account was created less than 1 day ago.`);
  }

  // Check if the message has some blocked word
  if (BLOCKED_WORDS.some(word => message.includes(word.toLowerCase()))) {
    // Send a message explaining why the message was deleted
    client.say(channel, `@${userstate.username}, sorry! You message was deleted because have some forbidden word.`);
    // delete message
    client.deletemessage(channel, messageUUID);
  }

}
