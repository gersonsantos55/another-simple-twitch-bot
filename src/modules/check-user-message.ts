import tmi from "tmi.js";

import { client } from "../index"

const BOT_USERNAMES: string[] = [];

export function checkUserMessage(channel: string, userstate: tmi.ChatUserstate, message: string): void {

  if (BOT_USERNAMES.includes(userstate.username as string)) {
    return;
  }

  message = message.toLowerCase();
  client.say(channel, `funciona`);
  // shouldSendMessage = [].some((blockedWord) =>
  //   message.includes(blockedWord.toLowerCase())
  // );
  // if (shouldSendMessage) {
  //   // tell user
  //   client.say(
  //     channel,
  //     `@${userstate.username}, sorry!  You message was deleted.`
  //   );
  //   // delete message
  //   client.deletemessage(channel, userstate.id);
  // }
}