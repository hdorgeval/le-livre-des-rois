import { formatMarkdown } from '.';
import { getFilesInDirectory } from '../fs';
import path from 'path';

function formatEpisodesIn(folder: string, start: number, end: number) {
  const files = getFilesInDirectory(folder, (filepath) => {
    const filename = filepath.split(path.sep).pop();
    const episodeNumber = Number(filename?.split('-')[0]);
    if (episodeNumber >= start && episodeNumber <= end) {
      return true;
    }
    return false;
  });

  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    formatMarkdown(file);
  }
}

formatEpisodesIn('src/markdown/12-kaous', 5, 153);
