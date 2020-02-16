import axios from "axios";
import { Message } from "discord.js";
require("dotenv").config();

import { lifetimeStatsParser } from "./lifetimeStatsParser";

const PUBG_API_KEY = process.env.PUBG_API_KEY;

export const getPubgLifetimeStats = async (
  userId: string,
  msg: Message
): Promise<void> => {
  try {
    const response = await axios.get(
      `https://api.pubg.com/shards/steam/players/${userId}/seasons/lifetime`,
      {
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${PUBG_API_KEY}`,
        },
      }
    );

    if (!response || response.status === 401 || response.status === 500) {
      throw new Error("Could not connect to the PUBG API");
    }

    return lifetimeStatsParser(response.data, msg);
  } catch (err) {
    msg.reply(
      ":man_shrugging: - Something went wrong getting lifetime stats from the PUBG API. Try calling your mom and try later."
    );
    console.error(err);
  }
};
