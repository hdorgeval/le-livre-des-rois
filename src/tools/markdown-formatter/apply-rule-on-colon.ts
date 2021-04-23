export function applyRuleOnColon(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split(' ')
    .map((word) => {
      if (word && word.length > 1 && word.endsWith(':')) {
        return word.replace(':', ' :');
      }

      if (word && word.length > 1 && word.includes(':')) {
        return word.replace(':', ' : ');
      }

      return word;
    })
    .join(' ')
    .replace(/ {2}/g, ' ');
}
