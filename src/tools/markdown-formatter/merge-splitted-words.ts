const wellknownSplitRegex = /-je|-tu$|-il|-elle|-nous|-vous|-ils|-elles|-t-|-i-|-à-|-même|au-|-moi|-toi|-lui|-leur|e-le|s-le|z-le|z-la|t-on|très-|est-ce|sont-ce|fût-ce|sur-le-champ|-huit|-vingts|-mère|-père|-ci|-haut|-bas|tout-puissant|petit-fils|celle-là/;

export function mergeSplittedWords(content: string): string {
  return content
    .replace(/ {2}/g, ' ')
    .split(' ')
    .map((word) => {
      if (word && word.match(/[a-zéàâê]-[a-z]/) && !word.match(wellknownSplitRegex)) {
        return word.replace('-', '');
      }

      if (word && word.endsWith('-\nn')) {
        return word.replace('-\nn', '');
      }

      if (word && word.match(/[a-zéàâê]-\n[a-z]/) && !word.match(wellknownSplitRegex)) {
        return word.replace('-\n', '');
      }

      if (word && word.includes('-\n1n')) {
        return word.replace('-\n1n', 'm');
      }

      if (word && word.includes('-')) {
        return word;
      }

      return word;
    })
    .join(' ')
    .replace(/ {2}/g, ' ');
}
