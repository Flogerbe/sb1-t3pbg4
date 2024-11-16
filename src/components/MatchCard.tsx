import React from 'react';
import { Match } from '../types/api';
import { format } from 'date-fns';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const { homeTeam, awayTeam, status, competition, thumbnail } = match;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={thumbnail || 'https://via.placeholder.com/300x150?text=Match'} 
          alt="Match thumbnail" 
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-0 right-0 m-2">
          <span className={`text-sm px-2 py-1 rounded font-semibold ${
            status === 'LIVE' ? 'bg-red-500 text-white' : 
            status === 'FINISHED' ? 'bg-gray-100 text-gray-800' : 
            'bg-green-500 text-white'
          }`}>
            {status}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-sm text-gray-600 mb-2">{competition}</div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-900">{homeTeam.name}</span>
            <span className="font-bold text-xl">{homeTeam.score}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-900">{awayTeam.name}</span>
            <span className="font-bold text-xl">{awayTeam.score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};