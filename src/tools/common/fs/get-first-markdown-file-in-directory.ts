import { getFilesInDirectory } from '.';
import { PathLike } from 'fs';

export const getFirstMarkdownInDirectory = (path: PathLike): string | undefined => {
  const markdownFile = getFilesInDirectory(path, (p): boolean => p.endsWith('.md')).shift();
  return markdownFile;
};
