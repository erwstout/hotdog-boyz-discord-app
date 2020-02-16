import { Message } from "discord.js";

export const help = (msg: Message): Promise<any> =>
  msg
    .reply(
      `
    It looks like you're lost... 😢
    -------------------------------
    **PUBG**
    You can view your PUBG lifetime stats using the \`pubg\` command. Run \`!hotdog pubg help\` for usage info.

    We are also watching your every message, waiting for you to say those special words...
  `
    )
    .then(() => console.log(`Help info sent to ${msg.author.tag}`));
