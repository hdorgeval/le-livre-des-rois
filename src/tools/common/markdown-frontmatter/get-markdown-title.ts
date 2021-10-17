import { readAllLinesInFile } from '../fs';
import { PathLike } from 'fs';

export const getMarkdownTitleInFile = (markdownFile: PathLike): string => {
  const lines = readAllLinesInFile(markdownFile);
  const lineWithTitle = lines.filter((line) => line.startsWith('# ')).shift();
  if (!lineWithTitle) {
    throw new Error(`no title found in Markdown file ${markdownFile}`);
  }
  const markdownTitle = lineWithTitle.replace('# ', '').replace('[^1]', '').trim();
  return markdownTitle;
};
