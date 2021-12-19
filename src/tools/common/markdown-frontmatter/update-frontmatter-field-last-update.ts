import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
  lastUpdateOf,
} from '../../common/fs';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';

export const updateFrontmatterFieldLastUpdate = async (rootDirectory: PathLike): Promise<void> => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      await updateFrontmatterFieldIn(file);
    }

    // eslint-disable-next-line no-console
    console.log('end');
  }
};

export const updateFrontmatterFieldIn = async (markdownFile: PathLike): Promise<void> => {
  const lines = readAllLinesInFile(markdownFile);
  let hasBeenUpdated = false;
  const refactoredLines = lines.map((line) => {
    if (line.startsWith('lastUpdate:')) {
      const lastUpdateDate = lastUpdateOf(markdownFile.toString());
      const year = lastUpdateDate.toLocaleDateString('en', { year: 'numeric' });
      const month = lastUpdateDate.toLocaleDateString('en', { month: '2-digit' });
      const day = lastUpdateDate.toLocaleDateString('en', { day: '2-digit' });
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
    // eslint-disable-next-line no-console
    console.log(`updating frontmatter field 'lastUpdate' in '${markdownFile}'`);

    writeFileSync(markdownFile, refactoredLines.join(EOL));
  }
};
