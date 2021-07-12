import { setTagsIn } from './markdown-to-tags';
import { getFilesInDirectory, getDirectoriesRecursivelyIn } from '../../common/fs';
import { PathLike } from 'fs';

export const setTagsOfMarkdownFilesIn = (rootDirectory: PathLike): void => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.forEach((directory) => {
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));
    files.forEach((file) => {
      // eslint-disable-next-line no-console
      console.log(`updating tags in '${file}'`);
      setTagsIn(file);
    });
  });
};
