import { Message, ClientUser } from "discord.js";
import includes from "lodash/includes";
import split from "lodash/split";

import * as config from "../config.json";
import { hotdogMention } from "./hotdogMention";
import { help } from "./help";
import { pubgMention } from "./pubgMention";

export const handleMessage = (msg: Message, clientId: string): void => {
  const messageContent: Array<string> = split(msg.content, " ");

  // did someone say hotdog?
  if (includes(messageContent, "hotdog")) {
    console.log("hot dog was mentioned! Rejoice!");
    hotdogMention(msg);
  }

  // help screen
  if (
    msg.content === `${config.prefix}hotdog` ||
    msg.content === `${config.prefix}hotdog help`
  ) {
    console.log("Can you show me da weh?");
    help(msg);
  }

  console.log("MESSAGE CONTENT ===> ", messageContent);
  console.log("AUTHOR ==> ", msg.author.id);

  // pubg commands
  console.log(ClientUser);
  if (msg.author.id !== clientId && includes(messageContent, "pubg")) {
    console.log("China #1!!!!");
    pubgMention(msg);
  }
};
