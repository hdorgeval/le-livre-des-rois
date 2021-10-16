/* eslint-disable no-useless-escape */
import 'jest';
import { removeChapterArtifacts } from '.';

test(`Should remove chapter artifact`, () => {
  // Given
  const content = `
Host, power and diadem. The world turned black

v. 34 To him, he disappeared and yielded all.

He was in hiding for a century,`;

  // When
  const result = removeChapterArtifacts(content);

  // Then
  const expected = `
Host, power and diadem. The world turned black

 To him, he disappeared and yielded all.

He was in hiding for a century,`;

  expect(result).toBe(expected);
});
