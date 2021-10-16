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

test(`Should remove chapter artifact`, () => {
  // Given
  const content = `
One said : " By cookery we might approach
The Shah, and by our wits devise a scheme
V. 36 To rescue one from each pair doomed to death."`;

  // When
  const result = removeChapterArtifacts(content);

  // Then
  const expected = `
One said : " By cookery we might approach
The Shah, and by our wits devise a scheme
 To rescue one from each pair doomed to death."`;

  expect(result).toBe(expected);
});

test(`Should remove chapter artifact`, () => {
  // Given
  const content = `
Secluded in their bowers, not tanged of tongues,
He took for handmaids. Not a jot had he V. 37
Of faith, king's uses, or morality.`;

  // When
  const result = removeChapterArtifacts(content);

  // Then
  const expected = `
Secluded in their bowers, not tanged of tongues,
He took for handmaids. Not a jot had he
Of faith, king's uses, or morality.`;

  expect(result).toBe(expected);
});
