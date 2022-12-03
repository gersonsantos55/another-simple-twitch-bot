import tmi from "tmi.js";

import { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAMES } from "./constants";
import {
  onChatHandler,
  onCheerHandler,
  onConnectedHandler,
  onDisconnectedHandler,
  onGiftPaidUpgradeHandler,
  onHostedHandler,
  onHostingHandler,
  onRaidedHandler,
  onReconnectHandler,
  onResubHandler,
  onSubGiftHandler,
  onSubscriptionHandler,
} from "./modules/event-handlers";


/***********************************************************************/
/******************** Config and connection section ********************/
/***********************************************************************/

const options = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
    timeout: 180000,
    reconnectDecay: 1.4,
    reconnectInterval: 1000,
  },
  identity: {
    username: BOT_USERNAME,
    password: OAUTH_TOKEN,
  },
  channels: CHANNEL_NAMES,
};

export const client = new tmi.Client(options);

client.connect();


/***********************************************************************/
/*************************** Events section ****************************/
/***********************************************************************/


/********** Connection events **********/

client.on("connected", onConnectedHandler);

client.on("disconnected", onDisconnectedHandler);

client.on("reconnect", onReconnectHandler);

/********** Subscription events **********/

client.on("giftpaidupgrade", onGiftPaidUpgradeHandler);

client.on("resub", onResubHandler);

client.on("subgift", onSubGiftHandler);

client.on("subscription", onSubscriptionHandler);

/********** Host and raid events **********/

client.on("hosted", onHostedHandler);

client.on("hosting", onHostingHandler);

client.on("raided", onRaidedHandler);

/********** Other events **********/

client.on("cheer", onCheerHandler);

client.on("chat", onChatHandler);
