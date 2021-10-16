import 'jest';
import { hasMissingEscapeCharacterOnBracket } from '.';

test(`Should detect regex has no un-escaped [ character`, () => {
  // Given
  // prettier-ignore
  // eslint-disable-next-line no-useless-escape
  const line = "(content: string) => content.replace(/, v\. [1,2,3][1,2,3]\n/g, ',\n'),";

  // When
  const result = hasMissingEscapeCharacterOnBracket(line);

  // Then
  expect(result).toBe(false);
});

test(`Should detect regex has no un-escaped [ character`, () => {
  // Given
  // prettier-ignore
  // eslint-disable-next-line no-useless-escape
  const line = "(content: string) => content.replace(/, v\. [1,2,3][1,2,3,4]\n/g, ',\n'),";

  // When
  const result = hasMissingEscapeCharacterOnBracket(line);

  // Then
  expect(result).toBe(false);
});

test(`Should detect regex has no un-escaped [ character`, () => {
  // Given
  // prettier-ignore
  // eslint-disable-next-line no-useless-escape
  const line = "(content: string) => content.replace(/, [V,v]\. [1,2,3][1,2,3,4]\n/g, ',\n'),";

  // When
  const result = hasMissingEscapeCharacterOnBracket(line);

  // Then
  expect(result).toBe(false);
});

test(`Should detect regex has no un-escaped [ character`, () => {
  // Given
  // prettier-ignore
  // eslint-disable-next-line no-useless-escape
  const line = "(content: string) => content.replace(/\n[V,v]\. [1,2,3][1,2,3,4,5,6] /g, '\n '),";

  // When
  const result = hasMissingEscapeCharacterOnBracket(line);

  // Then
  expect(result).toBe(false);
});

test(`Should detect regex has un-escaped [ character`, () => {
  // Given
  // prettier-ignore
  // eslint-disable-next-line no-useless-escape
  const line = "(content: string) => content.replace(/, v\. [] [1,2,3][1,2,3]\n/g, ',\n'),";

  // When
  const result = hasMissingEscapeCharacterOnBracket(line);

  // Then
  expect(result).toBe(true);
});
