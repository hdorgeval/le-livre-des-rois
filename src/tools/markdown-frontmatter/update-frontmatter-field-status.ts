import { getFilesInDirectory, getDirectoriesRecursivelyIn, readAllLinesInFile } from '../common/fs';
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
      console.log(`updating frontmatter field 'status' in '${file}'`);
      await updateFrontmatterFieldIn(file);
    }
  }
};

export const updateFrontmatterFieldIn = async (markdownFile: PathLike): Promise<void> => {
  const lines = readAllLinesInFile(markdownFile);
  const hasEmptyTag = lines.some((line) => line.startsWith('tags: []'));
  const status = hasEmptyTag ? 'draft' : 'ready';

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('status:')) {
      return `status: '${status}'`;
    }

    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

updateFrontmatterField(path.join(process.cwd(), 'src', 'markdown', 'fr')).then(() => {
  // eslint-disable-next-line no-console
  console.log('end');
});
