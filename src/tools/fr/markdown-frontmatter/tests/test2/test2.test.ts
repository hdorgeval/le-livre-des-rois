import 'jest';
import { getTagsFrom } from '../../../markdown-tags';
import { updateFrontmatter } from '../..';
import { getFirstMarkdownInDirectory, readAllLinesInFile } from '../../../../common/fs';

test('Should update tag section in frontmatter when this section is multi lines', () => {
  // Given
  const markdownFile = getFirstMarkdownInDirectory(__dirname) || '';
  const markdownContent = readAllLinesInFile(markdownFile);
  const tags = getTagsFrom(markdownFile);

  // When
  const result = updateFrontmatter('tags').in(markdownContent).withValues(tags);

  // Then
  expect(result.length).toBe(35);
});
