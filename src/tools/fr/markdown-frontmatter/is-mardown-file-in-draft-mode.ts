import { readAllLinesInFile } from '../../common/fs';
import { PathLike } from 'fs';

export const isMarkdownFileInDraftMode = (markdownFile: PathLike): boolean => {
  const lines = readAllLinesInFile(markdownFile);
  return lines.some((line) => line.includes("status: 'draft'"));
};
