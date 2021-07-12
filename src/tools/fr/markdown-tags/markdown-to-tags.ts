import { noises } from './noises';
import { favorites } from './favorites';
import { readAllLinesInFile } from '../../common/fs';
import { updateFrontmatter, removeFrontMatterIn } from '../markdown-frontmatter';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';

export const getTagsFrom = (markdownFile: PathLike): string[] => {
  const allLines = readAllLinesInFile(markdownFile);
  const allLinesExceptFrontmatter = removeFrontMatterIn(allLines);
  const allTags = allLinesExceptFrontmatter
    .join(' ')
    .split(/\n|\r|\s|,|;|\.|:|!|'|’|\(|\)|\?/)
    .map((word) => word.trim())
    .filter((word) => word.length > 2)
    .filter((word) => {
      if (word.match(/^[A-Z]/)) {
        return true;
      }
      return favorites.includes(word);
    })
    .filter((word) => !noises.includes(word));

  const uniqueTags = Array.from(new Set(allTags)).sort((a, b) =>
    a.replace('â', 'a').toLowerCase() >= b.replace('â', 'a').toLowerCase() ? 1 : -1,
  );

  return uniqueTags;
};

export const setTagsIn = (markdownFile: PathLike): void => {
  const markdownContent = readAllLinesInFile(markdownFile);
  const tags = getTagsFrom(markdownFile);
  const updatedMardownContent = updateFrontmatter('tags').in(markdownContent).withValues(tags);
  writeFileSync(markdownFile, updatedMardownContent.join(EOL));
};
