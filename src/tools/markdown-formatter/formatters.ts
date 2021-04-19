import {
  applyRuleOnColon,
  applyRuleOnExclamationPoint,
  applyRuleOnQuestionMark,
  applyRuleOnSemicolon,
  mergeSplittedSentences,
  mergeSplittedWords,
  setUpperCaseAfterQuestionMark,
  splitSentencesAfterClosingQuotationMark,
  splitSentencesAfterEndPoint,
  splitSentencesAfterQuestionMark,
} from '.';

function removeMultipleLineFeeds(content: string): string {
  return content.replace(/\n\n\n/g, '\n\n');
}

function trimLines(content: string): string {
  return content
    .split('\n\n')
    .map((line, index) => (index > 1 ? line.trim() : line))
    .join('\n\n');
}

function setFirstLetterUpperCase(content: string): string {
  return content
    .split('\n\n')
    .map((line) => {
      const words = line.split(' ');
      const firstWord = words[0];
      const lettersInFirstWord = [...firstWord];
      const firstLetter = lettersInFirstWord[0];
      if (firstLetter && firstLetter.match(/[a-z]/g)) {
        lettersInFirstWord[0] = firstLetter.toUpperCase();
        const fixedWord = lettersInFirstWord.join('');
        words[0] = fixedWord;
        return words.join(' ');
      }
      return line;
    })
    .join('\n\n');
}

function removePageNumbers(content: string): string {
  return content
    .split(' ')
    .map((word) => {
      if (word && word.match(/[1-9][0-9][0-9]/i)) {
        return word.replace(/[1-9][0-9][0-9]/i, '');
      }

      if (word && word.match(/[1-9][0-9]/i)) {
        return word.replace(/[1-9][0-9]/i, '');
      }

      return word;
    })
    .join(' ');
}

function removeDuplicatedSpaces(content: string): string {
  let result = content;
  const lenghtBefore = result.length;
  for (let index = 0; index < 1000; index++) {
    result = result.replace('  ', ' ');
    const lengthAfter = result.length;
    if (lenghtBefore === lengthAfter) {
      break;
    }
  }
  return result;
}

export function formatContent(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/KEI KHOSROU\./g, ''),
    (content: string) => content.replace(/KEÎ KHOSBOU\./g, ''),
    (content: string) => content.replace(/KEÏ KHoSRoU\./g, ''),
    (content: string) => content.replace(/KEl KHOSBOU\./g, ''),
    (content: string) => content.replace(/LE LIVRE DES BOIS\./g, ''),
    (content: string) => content.replace(/LE LIVRE DES ROIS\./g, ''),
    (content: string) => content.replace(/aux-devant/g, 'au-devant'),
    (content: string) => content.replace(/lran/g, 'Iran'),
    (content: string) => content.replace(/Boum/g, 'Roum'),
    (content: string) => content.replace(/Irmanieus/g, 'Irmaniens'),
    (content: string) => content.replace(/sa tète/g, 'sa tête'),
    (content: string) => content.replace(/ , /g, ', '),
    (content: string) => content.replace(/, et /g, ' et '),
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
    splitSentencesAfterEndPoint,
    splitSentencesAfterQuestionMark,
    splitSentencesAfterClosingQuotationMark,
    (content: string) => content.replace(/ O /g, ' Ô '),
    (content: string) => content.replace(/ 0 /g, ' Ô '),
    (content: string) => content.replace(/A quoi/g, 'À quoi'),
    (content: string) => content.replace(/A la fin/g, 'À la fin'),
    (content: string) => content.replace(/Alors il /g, 'Alors, il '),
    (content: string) => content.replace(/Puis il /g, 'Puis, il '),

    // (content: string) => content.replace(/lui dit : /g, 'lui dit :\n\n> '),
    // (content: string) => content.replace(/lui demanda: /g, 'lui demanda :\n\n> '),
    // (content: string) => content.replace(/en répétant : /g, 'en répétant :\n\n> '),
    // (content: string) => content.replace(/disant : /g, 'disant :\n\n> '),
    // (content: string) => content.replace(/se dit en lui-même: /g, 'se dit en lui-même:\n\n> '),
    // (content: string) => content.replace(/lui dit: /g, 'lui dit :\n\n> '),
    // (content: string) => content.replace(/lui diras : /g, 'lui diras :\n\n> > '),
    // (content: string) => content.replace(/lui diras: /g, 'lui diras :\n\n> > '),
    // (content: string) => content.replace(/dis-lui: /g, 'dis-lui :\n\n> > '),
    // (content: string) => content.replace(/: Ô /g, ':\n\n> Ô '),
    // (content: string) => content.replace(/et\.\s/g, 'et '),
    // (content: string) => content.replace(/Ensuite il/g, 'Ensuite, il'),

    // (content: string) => content.replace(/> \n/g, ''),
    // (content: string) => content.replace(/\.\s/g, '.\n\n'),
    // (content: string) => content.replace(/\.»\s/g, '.»\n\n'),
    // (content: string) => content.replace(/\?\s/g, '?\n\n'),
    // (content: string) => content.replace(/, et/g, ' et'),
    (content: string) => content.replace(/, n /g, ', '),
    (content: string) => content.replace(/, rr /g, ', '),
    // (content: string) => content.replace(/A la fin je/g, 'À la fin, je'),

    trimLines,
    setFirstLetterUpperCase,
    removeDuplicatedSpaces,
    removeMultipleLineFeeds,
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
