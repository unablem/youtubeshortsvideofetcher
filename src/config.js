import dotenv from 'dotenv';
dotenv.config();

export const config = {
  apiKey: process.env.YOUTUBE_API_KEY,
  maxResults: 50, // Maximum results per request
  searchQuery: '#Shorts',
};