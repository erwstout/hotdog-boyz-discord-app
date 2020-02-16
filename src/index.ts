import Discord from "discord.js";
require("dotenv").config();

import { handleMessage } from "./messages";

const NODE_ENV = process.env.NODE_ENV;
const DISCORD_TOKEN: string | undefined = process.env.DISCORD_TOKEN;
const DISCORD_TOKEN_TEST: string | undefined = process.env.DISCORD_TOKEN_TEST; // used only for testing as a seperate bot and verifying new features. Ask stout (h1stout1) for more info if you need clarification

const client: Discord.Client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(
    "Nick claim 'A dab will do ya' | type !hotdog help for a list of commands",
    {
      type: "LISTENING",
    }
  );
});

client.on("message", (msg: Discord.Message) => {
  handleMessage(msg, client.user.id);
});

client.login(NODE_ENV === "production" ? DISCORD_TOKEN : DISCORD_TOKEN_TEST);
