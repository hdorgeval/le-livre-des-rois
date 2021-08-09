import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
} from '../../common/fs';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

export const getTotalNumberOfEpisodes = (rootDirectory: PathLike): number => {
  let result = 0;
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));
    result += files.length;
  }
  return result;
};

export const updateStatsIn = (markdownFile: PathLike, totalNumberOfEpisodes: number): void => {
  const lines = readAllLinesInFile(markdownFile);

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('total number of episodes:')) {
      return `total number of episodes: ${totalNumberOfEpisodes}`;
    }
    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

export const updateStatsTotalNumberOfEpisodes = (rootDirectory: PathLike): void => {
  const totalNumberOfEpisodes = getTotalNumberOfEpisodes(rootDirectory);
  const markdownFile = path.join(process.cwd(), 'stats', 'fr', 'stats.fr.md');
  updateStatsIn(markdownFile, totalNumberOfEpisodes);
};

updateStatsTotalNumberOfEpisodes(path.join(process.cwd(), 'src', 'markdown', 'fr'));
