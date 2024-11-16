export interface Match {
  id: string;
  title: string;
  competition: string;
  thumbnail: string;
  date: string;
  status: MatchStatus;
  homeTeam: {
    name: string;
    score: number;
  };
  awayTeam: {
    name: string;
    score: number;
  };
}

export type MatchStatus = 'LIVE' | 'FINISHED' | 'SCHEDULED';