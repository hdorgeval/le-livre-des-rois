const wellknownSplitRegex =
  /-je|-tu$|es-tu|as-tu|-tu\?|-tu,|-tu |-en|-toi |-il|-elle|porte-la|celui-là|-nous|-vous|-ils|-elle|-elles|-l-|-t-|-i-|-à-|-même|au-|-moi|-toi|-lui|-leur|e-le|s-le|z-le|z-la|t-on|très-|est-ce|Est-ce|sont-ce|fût-ce|sur-le-champ|-huit|-trois|-deux|-vingts|vingt-|dix-|-mère|-père|-ci|-haut|-bas|tout-puissant|petit-fils|petits-fils|grand-père|celle-là|celui-ci|Celui-là|Celui-ci|jusque-là|au-dessus|Au-dessus|Quelques-uns|quelques-uns|quelques-unes|Beit-ul-Mukaddes|lapis-lazuli|répondez-y|-dessous|-dessus|quant-à|avant-garde|-puissant|contre-sens|chef-d’œuvre|garde-robe|rapporte-la|rapporte-le|-i-zend|-zer|-Zer|-lui|-y|bien-aimé|avant-poste|ouï-dire|-devant|demi-farsang|quelques-uns|entre-attaquèrent|tire-d’aile|lui-même|elle-même|tout-saint|livrerais-je|-garde|jour-là|au-delà|dis-tu|viens-tu|Va-t'en|sang-froid|au-dessus|est-ce|vas-y|avant-hier|veux-tu|avant-garde|es-tu|jouis-en|délivre-la|-toi|Jusque-là|jusque-là|puis-je|as-tu|sais-tu|Envoie-le|Attache-la|fais-la|toute-puissance|-six|fais-en|Vas-y|vas-y|déposes-y|Porte-la|parles-en|donne-le-lui|sois-y|eût-ce|envoie-le-moi|quatre-vingtième|Khourdad-mah|exiges-tu|gens-là|mets-toi|prête-la|choisis-en|quelques-uns|-vous|-fois|appelles-en|-sept|quelques-uns|quelques-unes|Rends-moi|rends-moi|dit-elle|dit-il/;

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
