export function mergeSplittedSentences(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split(' ')
    .map((word) => {
      if (word && word.match(/[a-zéà,;:]\n[0êéâàa-z]/i)) {
        return word.replace('\n', ' ');
      }

      if (word && word.match(/[a-zéà]\.\n[A-Z]/i)) {
        return word.replace('.\n', '. ');
      }

      if (word && word.endsWith('\n\n') && !word.match(/[!?;,.]/i)) {
        return word.replace('\n\n', ' ');
      }
      if (word && word.endsWith('\n')) {
        return word.replace('\n', ' ');
      }

      if (word && word.startsWith('\n') && word.match(/\n[àâéêa-zA-Z]/)) {
        return word.replace('\n', ' ');
      }

      if (word && word.includes('\n')) {
        return word;
      }

      return word;
    })
    .join(' ')
    .replace(/ {2}/g, ' ')
    .replace(/ {2}/g, ' ');
}
