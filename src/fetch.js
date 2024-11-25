import { fetchShorts } from './youtube-api.js';
import fs from 'fs/promises';
import path from 'path';

async function saveShorts() {
  try {
    const shorts = await fetchShorts();
    const timestamp = new Date().toISOString().split('T')[0];
    const outputDir = './data';
    
    // Create data directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });
    
    // Save to JSON file
    const filePath = path.join(outputDir, `shorts-${timestamp}.json`);
    await fs.writeFile(filePath, JSON.stringify(shorts, null, 2));
    
    console.log(`✅ Fetched ${shorts.length} Shorts`);
    console.log(`📁 Saved to: ${filePath}`);
  } catch (error) {
    console.error('Error saving Shorts:', error.message);
  }
}

saveShorts();