import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
} from '../../common/fs';
import { getLastCommitForUpdatedContentOf } from '../../common/git/get-last-commit-for-markdown';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

export const updateFrontmatterField = async (rootDirectory: PathLike): Promise<void> => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      // eslint-disable-next-line no-console
      console.log(`updating frontmatter field 'lastUpdate' in '${file}'`);
      await updateFrontmatterFieldIn(file);
    }
  }
};

export const updateFrontmatterFieldIn = async (markdownFile: PathLike): Promise<void> => {
  const lines = readAllLinesInFile(markdownFile);
  const lastCommit = await getLastCommitForUpdatedContentOf(markdownFile.toString());
  let hasBeenUpdated = false;
  const refactoredLines = lines.map((line) => {
    if (line.startsWith('lastUpdate:')) {
      if (!lastCommit) {
        return line;
      }
      const lastCommitDate = new Date(lastCommit.date);
      const year = lastCommitDate.toLocaleDateString('en', { year: 'numeric' });
      const month = lastCommitDate.toLocaleDateString('en', { month: '2-digit' });
      const day = lastCommitDate.toLocaleDateString('en', { day: '2-digit' });
      const lastUpdate = `${year}-${month}-${day}`;
      const updatedLine = `lastUpdate: '${lastUpdate}'`;
      if (line !== updatedLine) {
        hasBeenUpdated = true;
      }
      return updatedLine;
    }

    return line;
  });

  if (hasBeenUpdated) {
    writeFileSync(markdownFile, refactoredLines.join(EOL));
  }
};

updateFrontmatterField(path.join(process.cwd(), 'src', 'markdown', 'fr')).then(() => {
  // eslint-disable-next-line no-console
  console.log('end');
});
