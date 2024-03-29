export function applyRuleOnEachLine(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split('\n\n')
    .map((sentence) => {
      if (sentence.startsWith('>')) {
        return sentence;
      }
      const result = sentence.replace(/\n/g, '\n\n');
      return result;
    })
    .join('\n\n');
}
