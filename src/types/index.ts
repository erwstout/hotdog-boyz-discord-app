export type UserName = string;

export interface PUBGGameStats {
  assists: number;
  boosts: number;
  dBNOs: number;
  dailyKills: number;
  dailyWins: number;
  damageDealt: number;
  days: number;
  headshotKills: number;
  heals: number;
  killPoints: number;
  kills: number;
  longestKill: number;
  longestTimeSurvived: number;
  losses: number;
  maxKillStreaks: number;
  mostSurvivalTime: number;
  rankPoints: number;
  rankPointsTitle: string;
  revives: number;
  rideDistance: number;
  roadKills: number;
  roundMostKills: number;
  roundsPlayed: number;
  suicides: number;
  swimDistance: number;
  teamKills: number;
  timeSurvived: number;
  top10s: number;
  vehicleDestroys: number;
  walkDistance: number;
  weaponsAcquired: number;
  weeklyKills: number;
  weeklyWins: number;
  winPoints: number;
  wins: number;
}

export interface PUBGGameModeStats {
  duo: PUBGGameStats;
  "duo-fpp": PUBGGameStats;
  solo: PUBGGameStats;
  "solo-fpp": PUBGGameStats;
  squad: PUBGGameStats;
  "squad-fpp": PUBGGameStats;
}

export enum PUBGGameModes {
  duo,
  "duo-fpp",
  solo,
  "solo-fpp",
  squad,
  "squad-fpp",
}

export interface PUBGStatsConstructor {
  "Game Type": string;
  Assists: number;
  "Boosts Used": number;
  Heals: number;
  Revives: number;
  Suicides: number;
  Kills: number;
  "Headshot Kills": number;
  "Road Kills": number;
  "Most Kills In Round": number;
  "Max Kill Streaks": number;
  "Longest Time Survived": number;
  "Distance Ridden In Vehicles": number;
  "Distance Swam": number;
  "Distance Walked": number;
  "Vehicles Destroyed": number;
  "Top 10s": number;
  Wins: number;
  Losses: number;
}
