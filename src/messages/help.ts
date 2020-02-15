import { Message } from "discord.js";

export const help = (msg: Message): Promise<any> =>
  msg
    .reply(
      `
    It looks like you're lost... 😢
    -------------------------------
    Currently, this app only looks for the word "hotdog" and adds reactions and a reply. There is more to come so stay tuned.
  `
    )
    .then(() => console.log(`Help info sent to ${msg.author.tag}`));
