export function setFirstLetterUpperCase(content: string): string {
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
