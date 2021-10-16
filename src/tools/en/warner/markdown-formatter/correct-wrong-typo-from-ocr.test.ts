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
