import { PathLike, statSync } from 'fs';

export const isFile = (path: PathLike): boolean => {
  try {
    return statSync(path).isFile();
  } catch (error) {
    return false;
  }
};
