import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LiveScores } from './components/LiveScores';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">⚽ Football Live Scores</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <LiveScores />
        </main>
        <footer className="bg-white mt-8">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              Data provided by ScoresBat API
            </p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;