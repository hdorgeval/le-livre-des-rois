import 'jest';
import { getFirstMarkdownInDirectory } from '../../../common/fs';
import { getTagsFrom } from '../..';

test('Should get tags', () => {
  // Given
  const markdownFile = getFirstMarkdownInDirectory(__dirname) || '';

  // When
  const result = getTagsFrom(markdownFile);

  // Then
  expect(result.length).toBe(11);
});
