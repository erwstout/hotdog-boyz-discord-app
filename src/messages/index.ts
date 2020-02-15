import { Message } from "discord.js";
import includes from "lodash/includes";
import split from "lodash/split";

import * as config from "../config.json";
import { hotdogMention } from "./hotdogMention";
import { help } from "./help";

export const handleMessage = (msg: Message): void => {
  const messageContent: Array<string> = split(msg.content, " ");

  if (includes(messageContent, "hotdog")) {
    hotdogMention(msg);
  }

  if (
    msg.content === `${config.prefix}hotdog` ||
    msg.content === `${config.prefix}hotdog help`
  ) {
    help(msg);
  }
};
