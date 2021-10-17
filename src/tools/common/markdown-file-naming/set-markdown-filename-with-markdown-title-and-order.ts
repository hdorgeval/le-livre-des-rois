import { getDirectoriesRecursivelyIn, getFilesInDirectory } from '../fs';
import { getFrontmatterFieldOrderInFile, getMarkdownTitleInFile } from '../markdown-frontmatter';
import { renameFile } from '../fs/rename-file';
import { kebabCase } from 'case-anything';
import { PathLike } from 'fs';

export const setMarkdownFilenameWithOrderAndTitleInDirectory = (rootDirectory: PathLike): void => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      const order = getFrontmatterFieldOrderInFile(file);
      const title = getMarkdownTitleInFile(file);
      const newFilename = kebabCase(`${order} ${title}`);

      // eslint-disable-next-line no-console
      console.log(`rename '${file}' to ${newFilename}`);

      renameFile(file, `${newFilename}.md`);
    }
  }
};
