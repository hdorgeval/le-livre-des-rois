import {
  applyRuleOnColon,
  applyRuleOnExclamationPoint,
  applyRuleOnLastLine,
  applyRuleOnQuestionMark,
  applyRuleOnSemicolon,
  correctWrongTypoFromOcr,
  correctWrongTypoStillRemainingAfterAutoFormat,
  mergeSplittedSentences,
  mergeSplittedWords,
  removeChapterArtifacts,
  removeDuplicatedSpaces,
  removeMultipleLineFeeds,
  removeNonBreakableSpaces,
  removePageNumbers,
  setFirstLetterUpperCase,
  setUpperCaseAfterExclamationPoint,
  setUpperCaseAfterQuestionMark,
  spanQuotationMark,
  splitSentencesAfterClosingQuotationMark,
  splitSentencesAfterEndPoint,
  splitSentencesAfterExclamationPoint,
  splitSentencesAfterExclamationPointAndLineFeed,
  splitSentencesAfterQuestionMark,
  splitSentencesAfterQuestionMarkAndLineFeed,
  splitSentencesOnStartOfQuotationMark,
} from '.';
import { ensureSpecialCharactersAreEscapedIn } from './check-regular-expressions';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

function trimLines(content: string): string {
  return content
    .split('\n\n')
    .map((line, index) => (index > 1 ? line.trim() : line))
    .join('\n\n');
}

export function formatContent(content: string): string {
  let result = content;
  [
    removeChapterArtifacts,
    correctWrongTypoFromOcr,
    removePageNumbers,
    mergeSplittedWords,
    mergeSplittedSentences,
    applyRuleOnSemicolon,
    applyRuleOnColon,
    applyRuleOnQuestionMark,
    applyRuleOnExclamationPoint,
    setUpperCaseAfterQuestionMark,
    setUpperCaseAfterExclamationPoint,
    splitSentencesAfterEndPoint,
    splitSentencesAfterQuestionMark,
    splitSentencesAfterQuestionMarkAndLineFeed,
    splitSentencesAfterExclamationPoint,
    splitSentencesAfterExclamationPointAndLineFeed,
    splitSentencesAfterClosingQuotationMark,
    splitSentencesOnStartOfQuotationMark,
    spanQuotationMark,
    correctWrongTypoStillRemainingAfterAutoFormat,
    trimLines,
    setFirstLetterUpperCase,
    removeNonBreakableSpaces,
    removeDuplicatedSpaces,
    removeMultipleLineFeeds,
    applyRuleOnLastLine,
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}

export function formatMarkdown(filepath: string): void {
  ensureSpecialCharactersAreEscapedIn(path.join(__dirname, 'remove-chapter-artifacts.ts'));
  ensureSpecialCharactersAreEscapedIn(path.join(__dirname, 'correct-wrong-typo-from-ocr.ts'));
  ensureSpecialCharactersAreEscapedIn(
    path.join(__dirname, 'correct-wrong-typo-still-remaining.ts'),
  );

  const content = readFileSync(filepath).toString();
  const parts = content.split('#');
  const markdown = parts[1];

  const newMarkdown = formatContent(markdown);
  const newContent = `${parts[0]}#${newMarkdown}`;
  writeFileSync(filepath, newContent);
}
