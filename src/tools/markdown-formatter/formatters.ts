function mergeSplittedWords(content: string): string {
  return content.replace(/-\s«|-\n«|-\n/g, '');
}

function mergeSplittedLines(content: string): string {
  return content.replace(/\n«/g, ' ');
}
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
    mergeSplittedWords,
    mergeSplittedLines,
    (content: string) => content.replace(/«/g, ''),
    (content: string) => content.replace(/lui dit : /g, 'lui dit :\n\n> '),
    (content: string) => content.replace(/lui dit: /g, 'lui dit :\n\n> '),
    (content: string) => content.replace(/lui diras : /g, 'lui diras :\n\n> > '),
    (content: string) => content.replace(/lui diras: /g, 'lui diras :\n\n> > '),
    (content: string) => content.replace(/dis-lui: /g, 'dis-lui :\n\n> > '),
    (content: string) => content.replace(/et\.\s/g, 'et '),
    (content: string) => content.replace(/Ensuite il/g, 'Ensuite, il'),
    (content: string) => content.replace(/KEI KHOSROU\./g, ''),
    (content: string) => content.replace(/LE LIVRE DES BOIS\./g, ''),
    (content: string) => content.replace(/Boum/g, 'Roum'),
    (content: string) => content.replace(/;/g, ' ; '),
    (content: string) => content.replace(/-\s/g, ''),
    (content: string) => content.replace(/,\n/g, ', '),
    (content: string) => content.replace(/et\n/g, 'et '),
    (content: string) => content.replace(/et \n/g, 'et '),
    (content: string) => content.replace(/ on\n/g, ' on '),
    (content: string) => content.replace(/par\n/g, 'par '),
    (content: string) => content.replace(/des\n/g, 'des '),
    (content: string) => content.replace(/à\n/g, 'à '),
    (content: string) => content.replace(/[1-9]\n/g, ' '),
    (content: string) => content.replace(/O /g, 'Ô '),
    (content: string) => content.replace(/> \n/g, ''),
    (content: string) => content.replace(/\.\s/g, '.\n\n'),
    (content: string) => content.replace(/, et/g, ' et'),
    (content: string) => content.replace(/andessus/g, 'au-dessus'),
    (content: string) => content.replace(/àtoutes/g, 'à toutes'),
    (content: string) => content.replace(/; /g, ';\n\n'),
    trimLines,
    setFirstLetterUpperCase,
    removeDuplicatedSpaces,
    removeMultipleLineFeeds,
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
