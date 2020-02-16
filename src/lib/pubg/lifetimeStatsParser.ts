import { Message } from "discord.js";
import { AxiosResponse } from "axios";

import { PUBGStatsConstructor } from "../../types";

/* 
 This is really messy and could probably be cleaned up a bit. The initial idea was to 
 create an array of the game mode objects and parse them via the message, but the discord
 api did not like that.
*/

export const lifetimeStatsParser = (
  stats: AxiosResponse,
  msg: Message
): any => {
  const gameModeStats = stats.data.attributes.gameModeStats;

  const statsConstructor: PUBGStatsConstructor[] = [];

  Object.keys(gameModeStats).forEach(key => {
    const statStructure = {
      "Game Type": key,
      Assists: gameModeStats[key].assists,
      "Boosts Used": gameModeStats[key].boosts,
      Heals: gameModeStats[key].heals,
      Revives: gameModeStats[key].revives,
      Suicides: gameModeStats[key].suicides,
      Kills: gameModeStats[key].kills,
      "Headshot Kills": gameModeStats[key].headshotKills,
      "Road Kills": gameModeStats[key].roadKills,
      "Most Kills In Round": gameModeStats[key].roundMostKills,
      "Max Kill Streaks": gameModeStats[key].maxKillStreaks,
      "Longest Time Survived": gameModeStats[key].longestTimeSurvived,
      "Distance Ridden In Vehicles": gameModeStats[key].rideDistance,
      "Distance Swam": gameModeStats[key].swimDistance,
      "Distance Walked": gameModeStats[key].walkDistance,
      "Vehicles Destroyed": gameModeStats[key].vehicleDestroys,
      "Top 10s": gameModeStats[key].top10s,
      Wins: gameModeStats[key].wins,
      Losses: gameModeStats[key].losses,
    };

    statsConstructor.push(statStructure);
  });

  msg.reply(`
  :chicken: Here are your lifetime stats for PUBG :chicken:
  --------------
  **Game Type: ${statsConstructor[0]["Game Type"]}**

  Assists: **${statsConstructor[0]["Assists"]}**
  Boosts Used: **${statsConstructor[0]["Boosts Used"]}**
  Heals: **${statsConstructor[0]["Heals"]}**
  Revives: **${statsConstructor[0]["Revives"]}**
  Suicides:**${statsConstructor[0]["Suicides"]}**
  Kills: **${statsConstructor[0]["Kills"]}**
  Headshot Kills:**${statsConstructor[0]["Headshot Kills"]}**
  Road Kills: **${statsConstructor[0]["Road Kills"]}**
  Most Kills In Round: **${statsConstructor[0]["Most Kills In Round"]}**
  Max Kill Streaks: **${statsConstructor[0]["Max Kill Streaks"]}**
  Longest Time Survived: **${statsConstructor[0]["Longest Time Survived"]}**
  Distance Ridden In Vehicles: **${statsConstructor[0]["Distance Ridden In Vehicles"]}**
  Distance Swam: **${statsConstructor[0]["Distance Swam"]}**
  Distance Walked: **${statsConstructor[0]["Distance Walked"]}**
  Vehicles Destroyed: **${statsConstructor[0]["Vehicles Destroyed"]}**
  Top 10s: **${statsConstructor[0]["Top 10s"]}**
  Wins: **${statsConstructor[0]["Wins"]}**
  Losses: **${statsConstructor[0]["Losses"]}**
  `);
  msg.reply(`
  **Game Type: ${statsConstructor[1]["Game Type"]}**

  Assists: **${statsConstructor[1]["Assists"]}**
  Boosts Used: **${statsConstructor[1]["Boosts Used"]}**
  Heals: **${statsConstructor[1]["Heals"]}**
  Revives: **${statsConstructor[1]["Revives"]}**
  Suicides:**${statsConstructor[1]["Suicides"]}**
  Kills: **${statsConstructor[1]["Kills"]}**
  Headshot Kills:**${statsConstructor[1]["Headshot Kills"]}**
  Road Kills: **${statsConstructor[1]["Road Kills"]}**
  Most Kills In Round: **${statsConstructor[1]["Most Kills In Round"]}**
  Max Kill Streaks: **${statsConstructor[1]["Max Kill Streaks"]}**
  Longest Time Survived: **${statsConstructor[1]["Longest Time Survived"]}**
  Distance Ridden In Vehicles: **${statsConstructor[1]["Distance Ridden In Vehicles"]}**
  Distance Swam: **${statsConstructor[1]["Distance Swam"]}**
  Distance Walked: **${statsConstructor[1]["Distance Walked"]}**
  Vehicles Destroyed: **${statsConstructor[1]["Vehicles Destroyed"]}**
  Top 10s: **${statsConstructor[1]["Top 10s"]}**
  Wins: **${statsConstructor[1]["Wins"]}**
  Losses: **${statsConstructor[1]["Losses"]}**

  **Game Type: ${statsConstructor[2]["Game Type"]}**

  Assists: **${statsConstructor[2]["Assists"]}**
  Boosts Used: **${statsConstructor[2]["Boosts Used"]}**
  Heals: **${statsConstructor[2]["Heals"]}**
  Revives: **${statsConstructor[2]["Revives"]}**
  Suicides:**${statsConstructor[2]["Suicides"]}**
  Kills: **${statsConstructor[2]["Kills"]}**
  Headshot Kills:**${statsConstructor[2]["Headshot Kills"]}**
  Road Kills: **${statsConstructor[2]["Road Kills"]}**
  Most Kills In Round: **${statsConstructor[2]["Most Kills In Round"]}**
  Max Kill Streaks: **${statsConstructor[2]["Max Kill Streaks"]}**
  Longest Time Survived: **${statsConstructor[2]["Longest Time Survived"]}**
  Distance Ridden In Vehicles: **${statsConstructor[2]["Distance Ridden In Vehicles"]}**
  Distance Swam: **${statsConstructor[2]["Distance Swam"]}**
  Distance Walked: **${statsConstructor[2]["Distance Walked"]}**
  Vehicles Destroyed: **${statsConstructor[2]["Vehicles Destroyed"]}**
  Top 10s: **${statsConstructor[2]["Top 10s"]}**
  Wins: **${statsConstructor[2]["Wins"]}**
  Losses: **${statsConstructor[2]["Losses"]}**`);

  msg
    .reply(
      `
  **Game Type: ${statsConstructor[3]["Game Type"]}**

  Assists: **${statsConstructor[3]["Assists"]}**
  Boosts Used: **${statsConstructor[3]["Boosts Used"]}**
  Heals: **${statsConstructor[3]["Heals"]}**
  Revives: **${statsConstructor[3]["Revives"]}**
  Suicides:**${statsConstructor[3]["Suicides"]}**
  Kills: **${statsConstructor[3]["Kills"]}**
  Headshot Kills:**${statsConstructor[3]["Headshot Kills"]}**
  Road Kills: **${statsConstructor[3]["Road Kills"]}**
  Most Kills In Round: **${statsConstructor[3]["Most Kills In Round"]}**
  Max Kill Streaks: **${statsConstructor[3]["Max Kill Streaks"]}**
  Longest Time Survived: **${statsConstructor[3]["Longest Time Survived"]}**
  Distance Ridden In Vehicles: **${statsConstructor[3]["Distance Ridden In Vehicles"]}**
  Distance Swam: **${statsConstructor[3]["Distance Swam"]}**
  Distance Walked: **${statsConstructor[3]["Distance Walked"]}**
  Vehicles Destroyed: **${statsConstructor[3]["Vehicles Destroyed"]}**
  Top 10s: **${statsConstructor[3]["Top 10s"]}**
  Wins: **${statsConstructor[3]["Wins"]}**
  Losses: **${statsConstructor[3]["Losses"]}**

  **Game Type: ${statsConstructor[4]["Game Type"]}**

  Assists: **${statsConstructor[4]["Assists"]}**
  Boosts Used: **${statsConstructor[4]["Boosts Used"]}**
  Heals: **${statsConstructor[4]["Heals"]}**
  Revives: **${statsConstructor[4]["Revives"]}**
  Suicides:**${statsConstructor[4]["Suicides"]}**
  Kills: **${statsConstructor[4]["Kills"]}**
  Headshot Kills:**${statsConstructor[4]["Headshot Kills"]}**
  Road Kills: **${statsConstructor[4]["Road Kills"]}**
  Most Kills In Round: **${statsConstructor[4]["Most Kills In Round"]}**
  Max Kill Streaks: **${statsConstructor[4]["Max Kill Streaks"]}**
  Longest Time Survived: **${statsConstructor[4]["Longest Time Survived"]}**
  Distance Ridden In Vehicles: **${statsConstructor[4]["Distance Ridden In Vehicles"]}**
  Distance Swam: **${statsConstructor[4]["Distance Swam"]}**
  Distance Walked: **${statsConstructor[4]["Distance Walked"]}**
  Vehicles Destroyed: **${statsConstructor[4]["Vehicles Destroyed"]}**
  Top 10s: **${statsConstructor[4]["Top 10s"]}**
  Wins: **${statsConstructor[4]["Wins"]}**
  Losses: **${statsConstructor[4]["Losses"]}**

  **Game Type: ${statsConstructor[5]["Game Type"]}**

  Assists: **${statsConstructor[5]["Assists"]}**
  Boosts Used: **${statsConstructor[5]["Boosts Used"]}**
  Heals: **${statsConstructor[5]["Heals"]}**
  Revives: **${statsConstructor[5]["Revives"]}**
  Suicides:**${statsConstructor[5]["Suicides"]}**
  Kills: **${statsConstructor[5]["Kills"]}**
  Headshot Kills:**${statsConstructor[5]["Headshot Kills"]}**
  Road Kills: **${statsConstructor[5]["Road Kills"]}**
  Most Kills In Round: **${statsConstructor[5]["Most Kills In Round"]}**
  Max Kill Streaks: **${statsConstructor[5]["Max Kill Streaks"]}**
  Longest Time Survived: **${statsConstructor[5]["Longest Time Survived"]}**
  Distance Ridden In Vehicles: **${statsConstructor[5]["Distance Ridden In Vehicles"]}**
  Distance Swam: **${statsConstructor[5]["Distance Swam"]}**
  Distance Walked: **${statsConstructor[5]["Distance Walked"]}**
  Vehicles Destroyed: **${statsConstructor[5]["Vehicles Destroyed"]}**
  Top 10s: **${statsConstructor[5]["Top 10s"]}**
  Wins: **${statsConstructor[5]["Wins"]}**
  Losses: **${statsConstructor[5]["Losses"]}**
  `
    )
    .then(() =>
      console.log(`Sent PUBG Lifetime Stats to ${msg.author.username}`)
    );
};
