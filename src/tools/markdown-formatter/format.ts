import {
  applyRuleOnColon,
  applyRuleOnExclamationPoint,
  applyRuleOnLastLine,
  applyRuleOnQuestionMark,
  applyRuleOnSemicolon,
  mergeSplittedSentences,
  mergeSplittedWords,
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
    (content: string) => content.replace(/KEI KHOSROU\./g, ''),
    (content: string) => content.replace(/KEÎ KHOSBOU\./g, ''),
    (content: string) => content.replace(/KEI KHOSBOU\./g, ''),
    (content: string) => content.replace(/KEÏ KHoSRoU\./g, ''),
    (content: string) => content.replace(/KEÏ KHOSROU\./g, ''),
    (content: string) => content.replace(/KEl KHOSBOU\./g, ''),
    (content: string) => content.replace(/KEI KHUSBOU\./g, ''),
    (content: string) => content.replace(/KEl KHUSllUlU\./g, ''),
    (content: string) => content.replace(/KEÏ KAOUS\./g, ''),
    (content: string) => content.replace(/KEÏ KAUUS\./g, ''),
    (content: string) => content.replace(/KEI KAOUS\./g, ''),
    (content: string) => content.replace(/KEÎ KAOUS\./g, ''),
    (content: string) => content.replace(/LE LIVRE DES BOIS\./g, ''),
    (content: string) => content.replace(/LE LIVRE DES ROIS\./g, ''),
    (content: string) => content.replace(/LE LlVRE DES ROIS\./g, ''),
    (content: string) => content.replace(/aux-devant/g, 'au-devant'),
    (content: string) => content.replace(/I’Iran/g, 'l’Iran'),
    (content: string) => content.replace(/lran/g, 'Iran'),
    (content: string) => content.replace(/Boum/g, 'Roum'),
    (content: string) => content.replace(/Bustem/g, 'Rustem'),
    (content: string) => content.replace(/cortége/g, 'cortège'),
    (content: string) => content.replace(/siége/g, 'siège'),
    (content: string) => content.replace(/celuilà/g, 'celui-là'),
    (content: string) => content.replace(/Irmanieus/g, 'Irmaniens'),
    (content: string) => content.replace(/’de/g, ' de'),
    (content: string) => content.replace(/sa tète/g, 'sa tête'),
    (content: string) => content.replace(/heureuxl/g, 'heureux !'),
    (content: string) => content.replace(/ tues /g, ' tu es '),
    (content: string) => content.replace(/ , /g, ', '),
    (content: string) => content.replace(/, et /g, ' et '),
    (content: string) => content.replace(/Î\?/g, '?'),
    (content: string) => content.replace(/Ï»/g, '?»'),
    (content: string) => content.replace(/«/g, ''),
    (content: string) => content.replace(/«/g, ''),
    (content: string) => content.replace(/- /g, '-'),
    (content: string) => content.replace(/ \?n /g, ' ?» '),
    (content: string) => content.replace(/\. n /g, '.» '),
    (content: string) => content.replace(/ln /g, '!» '),
    (content: string) => content.replace(/\.n /g, '.» '),
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
    (content: string) => content.replace(/A quoi/g, 'À quoi'),
    (content: string) => content.replace(/A la fin/g, 'À la fin'),
    (content: string) => content.replace(/Alors il /g, 'Alors, il '),
    (content: string) => content.replace(/Puis il /g, 'Puis, il '),

    // (content: string) => content.replace(/lui diras : /g, 'lui diras :\n\n> > '),
    // (content: string) => content.replace(/lui diras: /g, 'lui diras :\n\n> > '),
    // (content: string) => content.replace(/dis-lui: /g, 'dis-lui :\n\n> > '),

    (content: string) => content.replace(/, n /g, ', '),
    (content: string) => content.replace(/, rr /g, ', '),

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
