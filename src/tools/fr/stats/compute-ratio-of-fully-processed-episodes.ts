import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
} from '../../common/fs';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

const shahnahmeProjectStartDate = new Date('2019-09-01');
export const getRatioOfFullyProcessedEpisodes = (rootDirectory: PathLike): number => {
  let total = 0;
  let ready = 0;
  let draft = 0;
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      total += 1;
      const file = files[index2];
      const lines = readAllLinesInFile(file);
      if (lines.some((line) => line.includes("status: 'ready'"))) {
        ready += 1;
      }
      if (lines.some((line) => line.includes("status: 'draft'"))) {
        draft += 1;
      }
    }
  }

  if (ready + draft !== total) {
    throw new Error('Some episode has missing metadata');
  }

  return ready / total;
};

export const updateStatsIn = (
  markdownFile: PathLike,
  ratioOfFullyProcessedEpisodes: number,
): void => {
  const lines = readAllLinesInFile(markdownFile);

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('ratio of fully processed episodes:')) {
      return `ratio of fully processed episodes: ${(ratioOfFullyProcessedEpisodes * 100).toFixed(
        0,
      )} %`;
    }
    if (line.startsWith('estimated end date:')) {
      return `estimated end date: ${
        estimatedEndDate(shahnahmeProjectStartDate, ratioOfFullyProcessedEpisodes)
          .toISOString()
          .split('T')[0]
      }`;
    }
    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

export function estimatedEndDate(startDate: Date, doneRatio: number): Date {
  const now = new Date();
  const elapsedTime = now.getTime() - startDate.getTime();
  const estimatedTotalTime = elapsedTime / doneRatio;
  const endDate = new Date(startDate.getTime() + estimatedTotalTime);
  return endDate;
}

export const updateStatsRatioOfFullyProcessedEpisodes = (rootDirectory: PathLike): void => {
  const ratio = getRatioOfFullyProcessedEpisodes(rootDirectory);
  const markdownFile = path.join(process.cwd(), 'stats', 'fr', 'stats.fr.md');
  updateStatsIn(markdownFile, ratio);
};

updateStatsRatioOfFullyProcessedEpisodes(path.join(process.cwd(), 'src', 'markdown', 'fr'));
