import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMatches } from '../services/api';
import { MatchCard } from './MatchCard';

export const LiveScores: React.FC = () => {
  const { data: matches, isLoading, error } = useQuery({
    queryKey: ['matches'],
    queryFn: getMatches,
    refetchInterval: 30000 // Refresh every 30 seconds
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        Error loading matches. Please try again later.
      </div>
    );
  }

  const liveMatches = matches?.filter(m => m.status === 'LIVE') || [];
  const otherMatches = matches?.filter(m => m.status !== 'LIVE') || [];

  return (
    <div className="space-y-8">
      {liveMatches.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🔴 Live Matches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>
      )}

      {otherMatches.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Other Matches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </section>
      )}

      {matches?.length === 0 && (
        <div className="text-center text-gray-600 py-12">
          No matches available at the moment.
        </div>
      )}
    </div>
  );
};