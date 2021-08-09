import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
} from '../../common/fs';
import { execLtexChecker, numberOfDefects, syncFrSettingsFromVscode } from '../ltex';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

export const getTotalNumberOfDefectsInEpisodes = (rootDirectory: PathLike): number => {
  let totalDefects = 0;
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      // eslint-disable-next-line no-console
      console.log(`checking defects in '${file}'`);
      const logFile = execLtexChecker(file);
      totalDefects += numberOfDefects(logFile);
    }
  }

  return totalDefects;
};

export const updateStatsIn = (markdownFile: PathLike, numberOfDefects: number): void => {
  const lines = readAllLinesInFile(markdownFile);

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('total number of defects in episodes:')) {
      return `total number of defects in episodes: ${numberOfDefects}`;
    }

    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

export const updateTotalNumberOfDefectsInEpisodes = (rootDirectory: PathLike): void => {
  syncFrSettingsFromVscode();
  const totalNumberOfDefects = getTotalNumberOfDefectsInEpisodes(rootDirectory);
  const markdownFile = path.join(process.cwd(), 'stats', 'fr', 'stats.fr.md');
  updateStatsIn(markdownFile, totalNumberOfDefects);
};

updateTotalNumberOfDefectsInEpisodes(path.join(process.cwd(), 'src', 'markdown', 'fr'));
