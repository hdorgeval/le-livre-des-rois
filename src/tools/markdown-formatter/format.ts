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
    (content: string) => content.replace(/aux-devant/g, 'au-devant'),
    (content: string) => content.replace(/I’Iran/g, 'l’Iran'),
    (content: string) => content.replace(/lran/g, 'Iran'),
    (content: string) => content.replace(/Boum/g, 'Roum'),
    (content: string) => content.replace(/Bustem/g, 'Rustem'),
    (content: string) => content.replace(/grilles/g, 'griffes'),
    (content: string) => content.replace(/Keîanides/g, 'Keïanides'),
    (content: string) => content.replace(/cortége/g, 'cortège'),
    (content: string) => content.replace(/Ecoute/g, 'Écoute'),
    (content: string) => content.replace(/siége/g, 'siège'),
    (content: string) => content.replace(/ tète /g, ' tête '),
    (content: string) => content.replace(/celuilà/g, 'celui-là'),
    (content: string) => content.replace(/Irmanieus/g, 'Irmaniens'),
    (content: string) => content.replace(/’de/g, ' de'),
    (content: string) => content.replace(/ etde/g, ' et de'),
    (content: string) => content.replace(/sa tète/g, 'sa tête'),
    (content: string) => content.replace(/abréges/g, 'abrèges'),
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
    (content: string) => content.replace(/ l n /g, '! » '),
    (content: string) => content.replace(/\.n /g, '.» '),
    (content: string) => content.replace(/\. a /g, '.» '),
    (content: string) => content.replace(/\. ll /g, '. Il '),
    (content: string) => content.replace(/sur\. le/g, 'sur le'),
    (content: string) => content.replace(/ z /g, ' : '),
    (content: string) => content.replace(/\. lls /g, '. Ils '),
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
    (content: string) => content.replace(/A quoi/g, 'À quoi'),
    (content: string) => content.replace(/A qui/g, 'À qui'),
    (content: string) => content.replace(/Etant /g, 'Étant '),
    (content: string) => content.replace(/A la fin/g, 'À la fin'),
    (content: string) => content.replace(/A chaque/g, 'À chaque'),
    (content: string) => content.replace(/A ces paroles/g, 'À ces paroles'),
    (content: string) => content.replace(/Alors il /g, 'Alors, il '),
    (content: string) => content.replace(/Puis il /g, 'Puis, il '),
    (content: string) => content.replace(/, n /g, ', '),
    (content: string) => content.replace(/, rr /g, ', '),
    (content: string) => content.replace(/Keîanides/g, 'Keïanides'),
    (content: string) => content.replace(/Bustem/g, 'Rustem'),
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
