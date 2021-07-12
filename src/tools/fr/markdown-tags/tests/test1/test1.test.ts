import 'jest';
import { getTagsFrom } from '../..';
import { getFirstMarkdownInDirectory } from '../../../../common/fs';

test('Should get tags', () => {
  // Given
  const markdownFile = getFirstMarkdownInDirectory(__dirname) || '';

  // When
  const result = getTagsFrom(markdownFile);

  // Then
  expect(result.length).toBe(11);
});
