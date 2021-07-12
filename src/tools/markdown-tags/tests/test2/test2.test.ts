import 'jest';
import { getFirstMarkdownInDirectory, readAllLinesInFile } from '../../../common/fs';
import { setTagsIn } from '../../markdown-to-tags';
import { writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

test('Should set tags in markdown file', () => {
  // Given
  const markdownFile = getFirstMarkdownInDirectory(__dirname) || '';
  const originalMarkdownContent = readAllLinesInFile(markdownFile);

  // When
  setTagsIn(markdownFile);

  // Then
  const expectedMarkdownContent = readAllLinesInFile(
    path.join(`${__dirname}`, 'u-expected.md'),
  ).join(EOL);
  const actualMarkdownContent = readAllLinesInFile(markdownFile).join(EOL);
  expect(actualMarkdownContent).toEqual(expectedMarkdownContent);
  writeFileSync(markdownFile, originalMarkdownContent.join(EOL));
});
