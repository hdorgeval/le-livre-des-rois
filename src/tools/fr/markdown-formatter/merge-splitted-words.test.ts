import 'jest';
import { mergeSplittedWords } from '.';

[
  'a-t-il',
  'Abstiens-toi',
  'as-tu',
  'assieds-toi',
  'au-dessus',
  'Bebr-i-beyan',
  'celle-ci',
  'celle-là',
  'celui-ci',
  'conforme-toi',
  'devons-nous,',
  'dis-lui',
  'dites-leur',
  'emploie-les',
  'fais-le',
  'faut-il',
  'fût-ce',
  'grand-père',
  'là-haut',
  'laisse-moi',
  'lui-même',
  'mets-tu',
  'Mihri-Nousch',
  'Nousch-Ader',
  'pare-toi',
  'parle-lui',
  'petit-fils',
  'peux-tu',
  'prie-le',
  'puis-je',
  'Puis-je',
  'puisses-tu',
  'rappelle-toi',
  'répète-le',
  'répète-lui',
  'repose-toi',
  'retire-t-il',
  'sais-tu',
  'Salue-le',
  'serait-il',
  'Soumets-toi',
  'sur-le-champ',
  'toi-même',
  'tout-puissant',
  'très-juste',
  'très-saint',
  'Zal-Zer',
  'vingt-trois',
  'jusque-là',
].forEach((word) => {
  test(`Should not merge '${word}'`, () => {
    // Given

    // When
    const result = mergeSplittedWords(word);

    // Then
    expect(result).toBe(word);
  });
});

[
  ['cher-cher', 'chercher'],
  ['de-mander', 'demander'],
  ['Ir-maniens', 'Irmaniens'],
  ['cher-cher', 'chercher'],
  ['re-\nn', 're'],
  ['secrète-\n1nent;', 'secrètement;'],
  ['hon-nteux', 'honnteux'],
  ['com-battu', 'combattu'],
  ['ren-versés', 'renversés'],
  ['pa-roles', 'paroles'],
  ['inquié-tude', 'inquiétude'],
].forEach((useCase) => {
  test(`Should merge '${useCase[0]}' -> '${useCase[1]}'`, () => {
    // Given
    const [input, expected] = useCase;
    // When
    const result = mergeSplittedWords(input);

    // Then
    expect(result).toBe(expected);
  });
});
