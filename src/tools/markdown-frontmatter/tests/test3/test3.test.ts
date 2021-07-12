import 'jest';
import { getFirstMarkdownInDirectory, readAllLinesInFile } from '../../../common/fs';
import { removeFrontMatterIn } from '../..';

test('Should remove frontmatter', () => {
  // Given
  const markdownFile = getFirstMarkdownInDirectory(__dirname) || '';
  const markdownContent = readAllLinesInFile(markdownFile);

  // When
  const result = removeFrontMatterIn(markdownContent);

  // Then
  expect(result.length).toBe(3);
  expect(result[1]).toEqual('foobar');
});
