import tmi from 'tmi.js';

import { client } from '../index'
import { getTeaMessage, hasTeaCommand } from './tea';
import { getUserCustomMessage, userHasCustomMessages } from './custom-me-commands';

const BOT_USERNAMES: string[] = [];

const BLOCKED_WORDS: string[] = [];

export function checkUserMessage(
  channel: string,
  userstate: tmi.ChatUserstate,
  message: string
): void {
  if (
    typeof channel === 'string'
    && typeof userstate === 'object'
    && userstate.hasOwnProperty('username')
    && typeof userstate.username === 'string'
    && userstate.hasOwnProperty('id')
    && typeof userstate.id === 'string'
  ) {

    if (BOT_USERNAMES.includes(userstate.username)) {
      return;
    }

    message = message.toLocaleLowerCase();
    const username = userstate.username.toLocaleLowerCase();

    if (message === '!eu' && userHasCustomMessages(username)) {
      client.say(channel, `@${userstate.username}, você é: ${getUserCustomMessage(username)}.`);
      return;
    }

    if (BLOCKED_WORDS.some(word => message.includes(word.toLocaleLowerCase()))) {
      client.deletemessage(channel, userstate.id);
      client.say(channel, `@${userstate.username}, sorry! You message was deleted because have some forbidden word.`);
    }

    if (hasTeaCommand(message)) {
      client.say(channel, getTeaMessage(userstate.username));
    }

  }
}
