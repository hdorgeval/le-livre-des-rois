const wellknownSplitRegex =
  /-je|-tu$|es-tu|as-tu|-tu\?|-tu,|-tu |-en|-toi |-il|-elle|-nous|-vous|-ils|-elles|-l-|-t-|-i-|-à-|-même|au-|-moi|-toi|-lui|-leur|e-le|s-le|z-le|z-la|t-on|très-|est-ce|Est-ce|sont-ce|fût-ce|sur-le-champ|-huit|-trois|-deux|-vingts|vingt-|dix-|-mère|-père|-ci|-haut|-bas|tout-puissant|petit-fils|petits-fils|grand-père|celle-là|celui-ci|Celui-là|Celui-ci|jusque-là|au-dessus|Au-dessus|Quelques-uns|quelques-uns|quelques-unes|Beit-ul-Mukaddes|lapis-lazuli|répondez-y|-dessous|-dessus|quant-à|avant-garde|-puissant|contre-sens|chef-d’œuvre|garde-robe|rapporte-la|rapporte-le|-i-zend|-zer|-Zer|-lui|-y|bien-aimé|avant-poste|ouï-dire/;

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
