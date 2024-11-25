import React, { useState } from 'react';
import { format } from 'date-fns';
import shortsData from '../data/shorts-2024-11-25.json';
import './App.css';

// Mock metrics data (in real app, this would come from API)
const mockMetrics = {
  mostWatched: ['nlxJXuJJ-zk', 'LNUOH56NXa4', 'oYnoMcc1SPA'],
  mostLiked: ['aKnl-XQ26ME', 'O-fmTjozX0Y', 'TPzz1Y1qGkM'],
  mostCommented: ['g0B3ywHNG18', 'T3TMfepyYjw', 'c5TnXFk_BZk']
};

function App() {
  const [filter, setFilter] = useState('all');

  const getFilteredShorts = () => {
    if (filter === 'all') return shortsData;
    return shortsData.filter(short => mockMetrics[filter].includes(short.id));
  };

  const filteredShorts = getFilteredShorts();

  return (
    <div className="container">
      <header>
        <h1>YouTube Shorts Explorer</h1>
        <p>Showing {filteredShorts.length} recent shorts</p>
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All Shorts
          </button>
          <button 
            className={filter === 'mostWatched' ? 'active' : ''} 
            onClick={() => setFilter('mostWatched')}
          >
            Most Watched
          </button>
          <button 
            className={filter === 'mostLiked' ? 'active' : ''} 
            onClick={() => setFilter('mostLiked')}
          >
            Most Liked
          </button>
          <button 
            className={filter === 'mostCommented' ? 'active' : ''} 
            onClick={() => setFilter('mostCommented')}
          >
            Most Commented
          </button>
        </div>
      </header>
      <div className="grid">
        {filteredShorts.map((short) => (
          <div key={short.id} className="card">
            <a href={short.url} target="_blank" rel="noopener noreferrer">
              <img src={short.thumbnail} alt={short.title} loading="lazy" />
            </a>
            <div className="content">
              <h3>{short.title}</h3>
              <p className="channel">{short.channelTitle}</p>
              <p className="date">
                {format(new Date(short.publishedAt), 'MMM d, yyyy')}
              </p>
              {short.description && (
                <p className="description">{short.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;