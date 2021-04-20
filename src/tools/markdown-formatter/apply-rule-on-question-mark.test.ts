import 'jest';
import { splitSentencesAfterQuestionMarkAndLineFeed } from '.';

[
  ['monde?\n0 maître', 'monde?\n\n0 maître'],
  ['monde?\n\n0 maître', 'monde?\n\n0 maître'],
].forEach((useCase, index) => {
  test(`Should split '${index}'`, () => {
    // Given
    const [input, expected] = useCase;

    // When
    const result = splitSentencesAfterQuestionMarkAndLineFeed(input);

    // Then
    expect(result).toBe(expected);
  });
});
