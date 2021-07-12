import 'jest';
import { getFirstMarkdownInDirectory, readAllLinesInFile } from '../../../common/fs';
import { getTagsFrom } from '../../../markdown-tags';
import { updateFrontmatter } from '../..';

test('Should update tag section in frontmatter', () => {
  // Given
  const markdownFile = getFirstMarkdownInDirectory(__dirname) || '';
  const markdownContent = readAllLinesInFile(markdownFile);
  const tags = getTagsFrom(markdownFile);

  // When
  const result = updateFrontmatter('tags').in(markdownContent).withValues(tags);

  // Then
  expect(result.length).toBe(35);
});
