import { google } from 'googleapis';
import { config } from './config.js';

const youtube = google.youtube({
  version: 'v3',
  auth: config.apiKey,
});

export async function fetchShorts() {
  try {
    const response = await youtube.search.list({
      part: ['snippet'],
      q: config.searchQuery,
      maxResults: config.maxResults,
      type: ['video'],
      videoDuration: 'short',
      order: 'date',
    });

    return response.data.items.map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
      url: `https://www.youtube.com/shorts/${item.id.videoId}`,
    }));
  } catch (error) {
    console.error('Error fetching YouTube Shorts:', error.message);
    return [];
  }
}