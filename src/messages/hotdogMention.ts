import { Message } from "discord.js";

export const hotdogMention = (msg: Message): any =>
  msg
    .reply(":hotdog: PLEDGE ALLEGIANCE")
    .then(() => console.log(`Reply sent to ${msg.author.tag}`))
    .then(() => msg.react("🌭"))
    .catch(err => console.error(err));
