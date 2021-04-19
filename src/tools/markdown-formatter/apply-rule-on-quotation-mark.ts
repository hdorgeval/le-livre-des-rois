export function splitSentencesAfterClosingQuotationMark(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split('»')
    .map((sentence, index) => {
      if (index === 0) {
        return sentence;
      }

      if (sentence && sentence.startsWith('\n\n')) {
        return sentence;
      }

      if (sentence && sentence.startsWith('\n')) {
        return `\n${sentence}`;
      }

      if (sentence && sentence.startsWith(' ')) {
        return `\n\n${sentence}`;
      }

      return sentence;
    })
    .join('»')
    .replace(/» \n\n/g, '»\n\n');
}
