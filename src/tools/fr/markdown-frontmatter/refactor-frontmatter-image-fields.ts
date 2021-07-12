import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
} from '../../common/fs';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

export const refactorFrontmatterImageFields = (rootDirectory: PathLike): void => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  directories.forEach((directory) => {
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));
    files.forEach((file) => {
      // eslint-disable-next-line no-console
      console.log(`updating image fields in '${file}'`);
      refactorImageFieldsIn(file);
    });
  });
};

export const refactorImageFieldsIn = (markdownFile: PathLike): void => {
  const lines = readAllLinesInFile(markdownFile);

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('image: ')) {
      const refactoredLine = line.replace('image: ', 'thumbnail: ');
      return refactoredLine;
    }

    if (line.startsWith('landscape: ')) {
      const refactoredLine = line
        .replace('landscape: ', 'image: ')
        .replace('https://source.unsplash.com/', '')
        .replace(/\//, '');
      const splits = refactoredLine.split("'");
      splits[1] += '.jpeg';
      const result = splits.join("'");
      return result;
    }

    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

// refactorFrontmatterImageFields(path.join(process.cwd(), 'src', 'markdown', 'fr'));
// refactorFrontmatterImageFields(path.join(process.cwd(), 'src', 'tags', 'fr'));
refactorFrontmatterImageFields(path.join(process.cwd(), 'src', 'tools', 'markdown-tags', 'tests'));
