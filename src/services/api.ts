import axios from 'axios';
import { Match } from '../types/api';

const BASE_URL = 'https://www.scoresbat.com/api';

export const getMatches = async (): Promise<Match[]> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/livescore`);
    
    // Transform the data to match our interface
    return data.response.map((match: any) => ({
      id: match.id.toString(),
      title: match.title,
      competition: match.competition,
      thumbnail: match.thumbnail,
      date: new Date().toISOString(), // API provides relative time, using current date
      status: match.status === 'LIVE' ? 'LIVE' : 
             match.status === 'FINISHED' ? 'FINISHED' : 'SCHEDULED',
      homeTeam: {
        name: match.home.name,
        score: parseInt(match.home.score) || 0
      },
      awayTeam: {
        name: match.away.name,
        score: parseInt(match.away.score) || 0
      }
    }));
  } catch (error) {
    console.error('Error fetching matches:', error);
    return [];
  }
};