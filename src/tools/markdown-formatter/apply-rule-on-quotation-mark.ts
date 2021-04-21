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

export function splitSentencesOnStartOfQuotationMark(content: string): string {
  let previousSentence = '';

  return content
    .replace(/ {2}/g, ' ')
    .split(' :')
    .map((sentence, index) => {
      if (index === 0) {
        previousSentence = sentence;
        return sentence;
      }

      if (sentence && sentence.startsWith('\n\n')) {
        previousSentence = sentence;
        return sentence;
      }

      if (sentence && sentence.startsWith('\n')) {
        previousSentence = sentence;
        return `\n${sentence}`;
      }

      const lastTenWords = takeLastTenWordsOf(previousSentence);
      const isStartOfQuotation = isHintForStartOfQuotation(lastTenWords);
      if (sentence && sentence.startsWith(' ') && isStartOfQuotation) {
        previousSentence = sentence;
        return `\n\n> ${sentence.trimLeft()}`;
      }

      previousSentence = sentence;
      return sentence;
    })
    .join(' :')
    .replace(/: \n\n/g, ':\n\n');
}

function takeLastTenWordsOf(content: string) {
  const words = content.split(' ');
  if (words.length < 10) {
    return content;
  }

  const numberOfWords = words.length;
  return words.filter((_word, index) => index > numberOfWords - 10).join(' ');
}

const startOfQuotationRegex = /en répétant|se disant|et disant|se dit en lui-même|il demanda à|lui demanda|Puis, il dit|Puis il dit|il se dit|il dit à|lui dit|répondit/i;
function isHintForStartOfQuotation(content: string): boolean {
  if (!content) {
    return false;
  }

  if (content.match(startOfQuotationRegex)) {
    return true;
  }

  return false;
}
