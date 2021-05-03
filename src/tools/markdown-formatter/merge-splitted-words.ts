const wellknownSplitRegex = /-je|-tu$|-tu\?|-tu |-il|-elle|-nous|-vous|-ils|-elles|-t-|-i-|-à-|-même|au-|-moi|-toi|-lui|-leur|e-le|s-le|z-le|z-la|t-on|très-|est-ce|sont-ce|fût-ce|sur-le-champ|-huit|-vingts|vingt-|dix-|-mère|-père|-ci|-haut|-bas|tout-puissant|petit-fils|grand-père|celle-là|jusque-là|au-dessus|Au-dessus|Quelques-uns|quelques-uns|Beit-ul-Mukaddes|lapis-lazuli/;

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
