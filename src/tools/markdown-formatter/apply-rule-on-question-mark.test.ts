import 'jest';
import { applyRuleOnQuestionMark, splitSentencesAfterQuestionMarkAndLineFeed } from '.';

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

[
  ['monde?\n0 maître', 'monde ?\n0 maître'],
  ['monde  ?\n0 maître', 'monde ?\n0 maître'],
  ['monde ?\n0 maître', 'monde ?\n0 maître'],
  ['monde?\n\n0 maître', 'monde ?\n\n0 maître'],
  ['monde  ?\n\n0 maître', 'monde ?\n\n0 maître'],
  ['monde   ?\n\n0 maître', 'monde ?\n\n0 maître'],
].forEach((useCase, index) => {
  test.only(`Should apply rule '${index}'`, () => {
    // Given
    const [input, expected] = useCase;

    // When
    const result = applyRuleOnQuestionMark(input);

    // Then
    expect(result).toBe(expected);
  });
});
