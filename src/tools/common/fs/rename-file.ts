import { getFilename } from './get-filename';
import { isFile } from './is-file';
import { PathLike, renameSync } from 'fs';

export const renameFile = (path: PathLike, newName: string): void => {
  const oldName = getFilename(path);
  if (oldName === newName) {
    return;
  }
  const newPath = path.toString().replace(oldName, newName);
  const oldPath = path.toString();

  if (isFile(newPath)) {
    throw new Error(`File '${newPath}' already exists.`);
  }

  if (isFile(path)) {
    renameSync(oldPath, newPath);
  }
};
