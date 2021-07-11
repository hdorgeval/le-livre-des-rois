import { getFilesInDirectory, getDirectoriesRecursivelyIn, readAllLinesInFile } from '../fs';
import { getLastCommitForUpdatedContentOf } from '../git/get-last-commit-for-markdown';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

export const addFrontmatterField = async (rootDirectory: PathLike): Promise<void> => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      // eslint-disable-next-line no-console
      console.log(`adding frontmatter field 'lastUpdate' in '${file}'`);
      await addFrontmatterFieldIn(file);
    }
  }
};

export const addFrontmatterFieldIn = async (markdownFile: PathLike): Promise<void> => {
  const lines = readAllLinesInFile(markdownFile);
  const lastCommit = await getLastCommitForUpdatedContentOf(markdownFile.toString());
  const refactoredLines = lines.map((line) => {
    if (line.startsWith("date: ''")) {
      if (!lastCommit) {
        return line;
      }
      const lastCommitDate = new Date(lastCommit.date);
      const year = lastCommitDate.toLocaleDateString('en', { year: 'numeric' });
      const month = lastCommitDate.toLocaleDateString('en', { month: '2-digit' });
      const day = lastCommitDate.toLocaleDateString('en', { day: '2-digit' });
      const lastUpdate = `${year}-${month}-${day}`;
      return `lastUpdate: '${lastUpdate}'`;
    }

    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

addFrontmatterField(path.join(process.cwd(), 'src', 'markdown', 'fr')).then(() => {
  // eslint-disable-next-line no-console
  console.log('end');
});
