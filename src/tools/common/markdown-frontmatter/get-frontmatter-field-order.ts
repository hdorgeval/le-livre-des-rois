import { readAllLinesInFile } from '../fs';
import { PathLike } from 'fs';

export const getFrontmatterFieldOrderInFile = (markdownFile: PathLike): string => {
  const lines = readAllLinesInFile(markdownFile);
  const lineWithOrder = lines.filter((line) => line.startsWith('order:')).shift();
  if (!lineWithOrder) {
    throw new Error(`no order found in frontmatter of Markdown file ${markdownFile}`);
  }
  const frontmatterOrder = lineWithOrder
    .replace('order:', '')
    .replace("'", '')
    .replace('"', '')
    .trim();

  return frontmatterOrder;
};
