import { isDirectory } from './is-directory';
import { isFile } from './is-file';
import { existsSync, PathLike, statSync } from 'fs';

const lastModifiedDate = (path: PathLike) => statSync(path).mtime;
const lastChangedDate = (path: PathLike) => statSync(path).ctime;

export const lastUpdateOf = (filePath: string): Date => {
  if (fileDoesNotExist(filePath)) {
    throw new Error(`File '${filePath}' does not exist.`);
  }
  const modified = lastModifiedDate(filePath);
  const changed = lastChangedDate(filePath);
  const result = modified.getTime() > changed.getTime() ? modified : changed;
  return result;
};

export const fileDoesNotExist = (filePath: string): boolean => {
  return !fileExists(filePath);
};
export const fileExists = (filePath: string): boolean => {
  if (existsSync(filePath) && isFile(filePath)) {
    return true;
  }

  if (existsSync(filePath) && isDirectory(filePath)) {
    throw new Error(`File '${filePath}' is a directory but should be a file.`);
  }

  return false;
};
