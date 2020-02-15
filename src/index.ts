import Discord from "discord.js";
import includes from "lodash/includes";
import split from "lodash/split";
require("dotenv").config();

const DISCORD_TOKEN: string | undefined = process.env.DISCORD_TOKEN;

const client: Discord.Client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg: Discord.Message) => {
  const messageContent: Array<string> = split(msg.content, " ");

  if (includes(messageContent, "hotdog")) {
    msg.reply(":hotdog: PLEDGE ALLEGIANCE");
  }
});

client.login(DISCORD_TOKEN);
