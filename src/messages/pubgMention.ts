import { Message } from "discord.js";
import split from "lodash/split";
import includes from "lodash/includes";
import { getPubgUserId } from "../lib/pubg/getUserId";
import { getPubgLifetimeStats } from "../lib/pubg/getLifetimeStats";

export const pubgMention = async (msg: Message): Promise<any> => {
  const messageContent = split(msg.content, " ");

  if (includes(messageContent, "help") || messageContent.length < 4) {
    msg.reply(`
    :rotating_light: Looks like you didn't pass any params! :rotating_light:

    The \`!hotdog pubg\` command needs two arguments. Your in game username as well as what stats you are searching for.
    Currently, only lifetime stats are supported. To look up your lifetime stats use the following command:

    \`!hotdog pubg {pubgUserName} lifetime\`
    `);
  } else {
    const userId = await getPubgUserId(messageContent[2], msg);
    if (!userId) {
      return msg.reply(
        ":man_shrugging: - Something went wrong. Walk the dog and try again later."
      );
    } else {
      return getPubgLifetimeStats(userId, msg);
    }
  }
};
