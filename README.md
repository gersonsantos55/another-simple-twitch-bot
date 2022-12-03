This is a simple Typescript project that uses the `tmi.js` library to connect to a Twitch chat and handle various events.


The events that this code handles include:

- Connection events: 
    - `connected`
    - `disconnected`
    - `reconnect`
- Subscription events: 
    - `giftpaidupgrade`
    - `resub`
    - `subgift`
    - `subscription`
- Host and raid events: 
    - `hosted`
    - `hosting`
    - `raided`
- Other events: 
    - `cheer`
    - `chat`

To use this code, the user will need to provide values for the `BOT_USERNAME`, `OAUTH_TOKEN`, and `CHANNEL_NAMES`. On the [src\constants.ts](https://github.com/gersonsantos55/another-simple-twitch-bot/blob/master/src/constants.ts) file.
