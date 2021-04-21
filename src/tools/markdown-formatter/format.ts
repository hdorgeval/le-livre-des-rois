import {
  applyRuleOnColon,
  applyRuleOnExclamationPoint,
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
  splitSentencesAfterClosingQuotationMark,
  splitSentencesAfterEndPoint,
  splitSentencesAfterExclamationPoint,
  splitSentencesAfterExclamationPointAndLineFeed,
  splitSentencesAfterQuestionMark,
  splitSentencesAfterQuestionMarkAndLineFeed,
  splitSentencesOnStartOfQuotationMark,
} from '.';

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
    (content: string) => content.replace(/KEl KHOSBOU\./g, ''),
    (content: string) => content.replace(/LE LIVRE DES BOIS\./g, ''),
    (content: string) => content.replace(/LE LIVRE DES ROIS\./g, ''),
    (content: string) => content.replace(/aux-devant/g, 'au-devant'),
    (content: string) => content.replace(/I’Iran/g, 'l’Iran'),
    (content: string) => content.replace(/lran/g, 'Iran'),
    (content: string) => content.replace(/Boum/g, 'Roum'),
    (content: string) => content.replace(/Irmanieus/g, 'Irmaniens'),
    (content: string) => content.replace(/sa tète/g, 'sa tête'),
    (content: string) => content.replace(/ , /g, ', '),
    (content: string) => content.replace(/, et /g, ' et '),
    (content: string) => content.replace(/Î\?/g, '?'),
    (content: string) => content.replace(/Ï»/g, '?»'),
    (content: string) => content.replace(/«/g, ''),
    (content: string) => content.replace(/«/g, ''),
    (content: string) => content.replace(/- /g, '-'),
    (content: string) => content.replace(/ \?n /g, ' ?» '),
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
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
