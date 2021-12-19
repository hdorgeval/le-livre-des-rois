import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
} from '../../common/fs';
import { getLastCommitForUpdatedContentOf } from '../git/get-last-commit-for-markdown';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';

export const updateFrontmatterFieldLastUpdate = async (rootDirectory: PathLike): Promise<void> => {
  // eslint-disable-next-line no-console
  console.log(`Updating frontmatter field last-update for markdown files in ${rootDirectory} ...`);

  // eslint-disable-next-line no-console
  console.log(`please wait since this may take a while ...`);
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      await updateFrontmatterFieldIn(file);
    }
  }

  // eslint-disable-next-line no-console
  console.log('end');
};

export const updateFrontmatterFieldIn = async (markdownFile: PathLike): Promise<void> => {
  const lines = readAllLinesInFile(markdownFile);
  let hasBeenUpdated = false;
  const todayDate = new Date();
  const yearToday = todayDate.toLocaleDateString('en', { year: 'numeric' });
  const monthToday = todayDate.toLocaleDateString('en', { month: '2-digit' });
  const dayToday = todayDate.toLocaleDateString('en', { day: '2-digit' });
  const todayUpdate = `${yearToday}-${monthToday}-${dayToday}`;

  const lastCommit = await getLastCommitForUpdatedContentOf(markdownFile.toString());
  if (!lastCommit) {
    return;
  }

  const lastCommitDate = new Date(lastCommit.date);
  const yearLastCommit = lastCommitDate.toLocaleDateString('en', { year: 'numeric' });
  const monthLastCommit = lastCommitDate.toLocaleDateString('en', { month: '2-digit' });
  const dayLastCommit = lastCommitDate.toLocaleDateString('en', { day: '2-digit' });
  const lastCommitUpdate = `${yearLastCommit}-${monthLastCommit}-${dayLastCommit}`;

  if (lastCommitUpdate !== todayUpdate) {
    return;
  }

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('lastUpdate:')) {
      const updatedLine = `lastUpdate: '${todayUpdate}'`;
      if (line === updatedLine) {
        return line;
      }
      hasBeenUpdated = true;
      return updatedLine;
    }

    return line;
  });

  if (hasBeenUpdated) {
    // eslint-disable-next-line no-console
    console.log(`updating frontmatter field 'lastUpdate' in '${markdownFile}'`);

    writeFileSync(markdownFile, refactoredLines.join(EOL));
  }
};
