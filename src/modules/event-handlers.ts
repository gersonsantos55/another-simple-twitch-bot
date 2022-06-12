import tmi from "tmi.js";

import { client } from "../index"
import { checkUserMessage } from "./check-user-message";


/********** Connection events **********/

export function onConnectedHandler(
  address: string,
  port: number,
): void {
  console.log(`Connected: ${address}:${port}`);
}

export function onDisconnectedHandler(
  reason: string,
): void {
  console.log(`Disconnected: ${reason}`);
}

export function onReconnectHandler() {
  console.log('Reconnecting...');
}


/********** Subscription events **********/

export function onGiftPaidUpgradeHandler(
  channel: string,
  username: string,
  sender: string,
  userstate: tmi.SubGiftUpgradeUserstate,
): void {
  client.say(channel,
    `Thank you @${username} for continuing your gifted sub! ${userstate}`
  );
}

export function onResubHandler(
  channel: string,
  username: string,
  months: number,
  message: string,
  userstate: tmi.SubUserstate,
  methods: tmi.SubMethods,
): void {
  const cumulativeMonths = userstate['msg-param-cumulative-months'];
  client.say(channel,
    `Thank you @${username} for the ${cumulativeMonths} sub!`
  );
}

export function onSubGiftHandler(
  channel: string,
  username: string,
  streakMonths: number,
  recipient: string,
  methods: tmi.SubMethods,
  userstate: tmi.SubGiftUserstate,
): void {
  client.say(channel,
    `Thank you @${username} for gifting a sub to ${recipient}}.`
  );
}

export function onSubscriptionHandler(
  channel: string,
  username: string,
  method: tmi.SubMethods,
  message: string,
  userstate: tmi.SubUserstate,
): void {
  client.say(channel,
    `Thank you @${username} for subscribing!`
  );
}


/********** Host and raid events **********/

export function onHostedHandler(
  channel: string,
  username: string,
  viewers: number,
  autohost: boolean,
): void {
  client.say(channel,
    `Thank you @${username} for the host of ${viewers}!`
  );
}

export function onHostingHandler(
  channel: string,
  target: string,
  viewers: number,
): void {
  client.say(channel,
    `We are now hosting ${target} with ${viewers} viewers!`
  );
}

export function onRaidedHandler(
  channel: string,
  username: string,
  viewers: number,
): void {
  client.say(channel,
    `Thank you @${username} for the raid of ${viewers}!`
  );
}


/********** Other events **********/

export function onCheerHandler(
  channel: string,
  userstate: tmi.ChatUserstate,
  message: string,
): void {
  client.say(channel,
    `Thank you @${userstate.username} for the ${userstate.bits} bits!`
  );
}

export function onMessageHandler(
  channel: string,
  userstate: tmi.ChatUserstate,
  message: string,
  self: boolean,
) {
  // Not handle self messages
  if (self) {
    return;
  }
  checkUserMessage(channel, userstate, message);
}