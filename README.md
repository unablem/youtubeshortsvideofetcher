# YouTube Shorts Fetcher

This tool fetches YouTube Shorts content using the YouTube Data API.

## Setup

1. Get a YouTube Data API key from the [Google Cloud Console](https://console.cloud.google.com)
2. Copy your API key to the `.env` file:
   ```
   YOUTUBE_API_KEY=your_api_key_here
   ```

## Usage

Run the fetcher:
```bash
npm run fetch
```

The tool will:
- Fetch recent YouTube Shorts
- Save them to JSON files in the `data` directory
- Each file is named with the current date

## Output Format

The data is saved in JSON format with the following structure:
```json
[
  {
    "id": "video_id",
    "title": "Video Title",
    "description": "Video Description",
    "thumbnail": "thumbnail_url",
    "publishedAt": "2024-01-01T00:00:00Z",
    "channelTitle": "Channel Name",
    "url": "https://www.youtube.com/shorts/video_id"
  }
]
```