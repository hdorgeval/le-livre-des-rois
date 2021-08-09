import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
} from '../../common/fs';
import { getTagsFrom } from '../markdown-tags';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

export const getTotalNumberOfExtractedKeywordsFromEpisodes = (rootDirectory: PathLike): number => {
  const keywords = new Set<string>();
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      const lines = readAllLinesInFile(file);
      if (lines.some((line) => line.includes("status: 'draft'"))) {
        continue;
      }
      const tags = getTagsFrom(file);
      tags.forEach((tag) => {
        keywords.add(tag);
      });
    }
  }

  return keywords.size;
};

export const updateStatsIn = (markdownFile: PathLike, numberOfKeywords: number): void => {
  const lines = readAllLinesInFile(markdownFile);

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('total number of extracted keywords:')) {
      return `total number of extracted keywords: ${numberOfKeywords}`;
    }

    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

export const updateStatsRatioOfFullyProcessedEpisodes = (rootDirectory: PathLike): void => {
  const numberOfKeywords = getTotalNumberOfExtractedKeywordsFromEpisodes(rootDirectory);
  const markdownFile = path.join(process.cwd(), 'stats', 'fr', 'stats.fr.md');
  updateStatsIn(markdownFile, numberOfKeywords);
};

updateStatsRatioOfFullyProcessedEpisodes(path.join(process.cwd(), 'src', 'markdown', 'fr'));
