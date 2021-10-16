import {
  applyRuleOnEachLine,
  applyRuleOnLastLine,
  correctWrongTypoFromOcr,
  removeChapterArtifacts,
  removeMultipleLineFeeds,
  removePageNumbers,
  splitSentencesOnStartOfQuotationMark,
} from '.';
import { ensureSpecialCharactersAreEscapedIn } from '../../../common/markdown-formatter';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

function trimLines(content: string): string {
  return content
    .split('\n\n')
    .map((line, index) => (index > 1 ? line.trim() : line))
    .join('\n\n');
}

function trimDialogs(content: string): string {
  return content.replace(/\n> {2}/g, '\n> ');
}

export function formatContent(content: string): string {
  let result = content;
  [
    removeChapterArtifacts,
    removePageNumbers,
    removeMultipleLineFeeds,
    trimLines,
    applyRuleOnEachLine,
    correctWrongTypoFromOcr,
    splitSentencesOnStartOfQuotationMark,
    trimDialogs,
    applyRuleOnLastLine,
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}

export function formatMarkdown(filepath: string): void {
  ensureSpecialCharactersAreEscapedIn(path.join(__dirname, 'correct-wrong-typo-from-ocr.ts'));
  ensureSpecialCharactersAreEscapedIn(path.join(__dirname, 'remove-chapter-artifacts.ts'));

  const content = readFileSync(filepath).toString();
  const parts = content.split('#');
  const markdownWithTitle = parts[1];

  const allLines = markdownWithTitle.split('\n\n');
  const title = allLines[0];
  const markdown = allLines.slice(1).join('\n\n');

  const newMarkdown = formatContent(markdown);
  const newContent = `${parts[0]}#${title}\n\n${newMarkdown}`;
  writeFileSync(filepath, newContent);
}
