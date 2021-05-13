export function removePageNumbers(content: string): string {
  return content
    .split(' ')
    .map((word) => {
      if (word.match(/1760/)) {
        return word;
      }
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
