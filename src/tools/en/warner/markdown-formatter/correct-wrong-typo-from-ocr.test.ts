/* eslint-disable no-useless-escape */
import 'jest';
import { correctWrongTypoFromOcr } from '.';

test(`Should correct wrong typo`, () => {
  // Given
  const content = `
For they had heard : " There is a monarch there —

An awe-inspiring king of dragon-visage/\*

Thus all the discontented cavaliers
`;

  // When
  const result = correctWrongTypoFromOcr(content);

  // Then
  const expected = `
For they had heard : " There is a monarch there —

An awe-inspiring king of dragon-visage."

Thus all the discontented cavaliers
`;
  expect(result).toBe(expected);
});

test(`Should correct wrong typo`, () => {
  // Given
  const content = `
Whose days were almost sped : &lt;e Bring forth the Dragon
Bound in the lasso's coils as he deserveth."`;

  // When
  const result = correctWrongTypoFromOcr(content);

  // Then
  const expected = `
Whose days were almost sped : " Bring forth the Dragon
Bound in the lasso's coils as he deserveth."`;
  expect(result).toBe(expected);
});
test(`Should correct wrong typo`, () => {
  // Given
  const content = `
The lady^s counsel pleased the Shah.`;

  // When
  const result = correctWrongTypoFromOcr(content);

  // Then
  const expected = `
The lady's counsel pleased the Shah.`;
  expect(result).toBe(expected);
});
