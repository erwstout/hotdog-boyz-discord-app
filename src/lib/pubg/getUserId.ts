import axios from "axios";
import { Message } from "discord.js";

require("dotenv").config();

import { UserName } from "../../types";

const PUBG_API_KEY = process.env.PUBG_API_KEY;

export const getPubgUserId = async (
  userName: UserName,
  msg: Message
): Promise<string | null> => {
  try {
    const response = await axios.get(
      "https://api.pubg.com/shards/steam/players",
      {
        params: {
          "filter[playerNames]": userName,
        },
        headers: {
          Accept: "application/vnd.api+json",
          Authorization: `Bearer ${PUBG_API_KEY}`,
        },
      }
    );

    if (!response || response.status === 401 || response.status === 500) {
      throw new Error("Could not get a response from the API");
    }

    const userId = response.data.data[0].id;
    return userId;
  } catch (err) {
    msg.reply(
      ":man_shrugging: - Something went wrong and we could not connect to the PUBG API. Try to be a better human and maybe it will work later."
    );
    console.error(err);
    return null;
  }
};
