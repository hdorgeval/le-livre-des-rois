export function applyRuleOnQuestionMark(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split(' ')
    .map((word) => {
      if (word && word.length > 1 && word.endsWith('?')) {
        return word.replace('?', ' ?');
      }

      return word;
    })
    .join(' ')
    .replace(/ {2}/g, ' ');
}

export function setUpperCaseAfterQuestionMark(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split('? ')
    .map((sentence, index) => {
      if (index === 0) {
        return sentence;
      }

      const firstChar = sentence.charAt(0);
      if (firstChar && firstChar.match(/[a-z]/)) {
        const letters = [...sentence];
        letters[0] = firstChar.toUpperCase();
        return letters.join('');
      }

      return sentence;
    })
    .join('? ')
    .replace(/ {2}/g, ' ');
}

export function splitSentencesAfterQuestionMark(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split('? ')
    .map((sentence, index) => {
      if (index === 0) {
        return sentence;
      }

      const firstChar = sentence.charAt(0);
      if (firstChar && firstChar.match(/[ÀÉA-Z]/)) {
        return `\n\n${sentence}`;
      }

      return sentence;
    })
    .join('? ')
    .replace(/\? \n\n/g, '?\n\n');
}

export function splitSentencesAfterQuestionMarkAndLineFeed(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split('?\n')
    .map((sentence, index) => {
      if (index === 0) {
        return sentence;
      }

      const firstChar = sentence.charAt(0);
      if (firstChar && firstChar.match(/[0ÀÉA-Z]/)) {
        return `\n${sentence}`;
      }

      return sentence;
    })
    .join('?\n')
    .replace(/\?\n\n\n/g, '?\n\n');
}
