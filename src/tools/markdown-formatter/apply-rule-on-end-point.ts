export function splitSentencesAfterEndPoint(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split('. ')
    .map((sentence, index) => {
      if (index === 0) {
        return sentence;
      }

      const firstChar = sentence.charAt(0);
      if (firstChar && firstChar.match(/[ÀÉÔA-Z]/)) {
        return `\n\n${sentence}`;
      }

      return sentence;
    })
    .join('. ')
    .replace(/\. \n\n/g, '.\n\n');
}
