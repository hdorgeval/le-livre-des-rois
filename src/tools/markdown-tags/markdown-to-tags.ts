import { noises } from './noises';
import { readAllLinesInFile } from '../fs';
import { updateFrontmatter } from '../markdown-frontmatter';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';

export const getTagsFrom = (markdownFile: PathLike): string[] => {
  const allLines = readAllLinesInFile(markdownFile);
  const allTags = allLines
    .filter((line) => !line.startsWith('tags:'))
    .filter((line) => !line.startsWith('---'))
    .join(' ')
    .split(/\n|\r|\s|,|;|\.|:|\?/)
    .map((word) => word.trim())
    .filter((word) => word.length > 2)
    .filter((word) => word.match(/^[A-Z]/))
    .filter((word) => !noises.includes(word));

  const uniqueTags = Array.from(new Set(allTags)).sort();

  return uniqueTags;
};

export const setTagsIn = (markdownFile: PathLike): void => {
  const markdownContent = readAllLinesInFile(markdownFile);
  const tags = getTagsFrom(markdownFile);
  const updatedMardownContent = updateFrontmatter('tags')
    .in(markdownContent)
    .withValues(tags);
  writeFileSync(markdownFile, updatedMardownContent.join(EOL));
};
