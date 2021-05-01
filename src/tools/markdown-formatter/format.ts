import {
  applyRuleOnColon,
  applyRuleOnExclamationPoint,
  applyRuleOnLastLine,
  applyRuleOnQuestionMark,
  applyRuleOnSemicolon,
  mergeSplittedSentences,
  mergeSplittedWords,
  removeChapterArtifacts,
  removeDuplicatedSpaces,
  removeMultipleLineFeeds,
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
import { correctWrongTypoFromOcr } from './correct-wrong-typo-from-ocr';
import { readFileSync, writeFileSync } from 'fs';

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
    (content: string) => content.replace(/ O /g, ' Ô '),
    (content: string) => content.replace(/ 0 /g, ' Ô '),
    (content: string) => content.replace(/ \.0 /g, ' Ô '),
    (content: string) => content.replace(/Alors il /g, 'Alors, il '),
    (content: string) => content.replace(/Puis il /g, 'Puis, il '),
    (content: string) => content.replace(/, n /g, ', '),
    (content: string) => content.replace(/, rr /g, ', '),
    (content: string) => content.replace(/ \.\n\n/g, '.\n\n'),
    (content: string) => content.replace(/Keîanides/g, 'Keïanides'),
    (content: string) => content.replace(/Bustem/g, 'Rustem'),
    (content: string) => content.replace(/Quelques\.-uns /g, 'Quelques-uns '),
    trimLines,
    setFirstLetterUpperCase,
    removeDuplicatedSpaces,
    removeMultipleLineFeeds,
    applyRuleOnLastLine,
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}

export function formatMarkdown(filepath: string): void {
  const content = readFileSync(filepath).toString();
  const parts = content.split('#');
  const markdown = parts[1];

  const newMarkdown = formatContent(markdown);
  const newContent = `${parts[0]}#${newMarkdown}`;
  writeFileSync(filepath, newContent);
}
