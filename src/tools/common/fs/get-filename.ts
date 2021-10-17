import { PathLike } from 'fs';
import { basename } from 'path';

export const getFilename = (path: PathLike): string => basename(path.toString());
