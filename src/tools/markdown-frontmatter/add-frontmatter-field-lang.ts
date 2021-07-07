import { getFilesInDirectory, getDirectoriesRecursivelyIn, readAllLinesInFile } from '../fs';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

export const addFrontmatterField = (rootDirectory: PathLike): void => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      // eslint-disable-next-line no-console
      console.log(`adding frontmatter field 'lang' in '${file}'`);
      addFrontmatterFieldIn(file);
    }
  }
};

export const addFrontmatterFieldIn = (markdownFile: PathLike): void => {
  const lines = readAllLinesInFile(markdownFile);

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('date:')) {
      return [line, `lang: 'fr'`].join(EOL);
    }
    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

addFrontmatterField(path.join(process.cwd(), 'src', 'tags'));
