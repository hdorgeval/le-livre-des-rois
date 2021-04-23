import 'jest';
import { splitSentencesOnStartOfQuotationMark } from '.';

[
  'et en répétant :\n\n> Quand je serai arrivé, que dirai-je ?',
  'et disant :\n\n> Bijen ne viendra-t-il donc pas ?',
  'Il se dit en lui-même :\n\n> Je crains que Gourguin',
  'Ensuite il demanda à Guiv :\n\n> Ô élu des héros',
  'Puis, il dit :\n\n> Ô créateur du ciel',
].forEach((useCase, index) => {
  test(`Should not split '${index}'`, () => {
    // Given

    // When
    const result = splitSentencesOnStartOfQuotationMark(useCase);

    // Then
    expect(result).toBe(useCase);
  });
});

[
  [
    'et en répétant : Quand je serai arrivé, que dirai-je ?',
    'et en répétant :\n\n> Quand je serai arrivé, que dirai-je ?',
  ],
  [
    'et disant : Bijen ne viendra-t-il donc pas ?',
    'et disant :\n\n> Bijen ne viendra-t-il donc pas ?',
  ],
  [
    'Il se dit en lui-même : Je crains que Gourguin',
    'Il se dit en lui-même :\n\n> Je crains que Gourguin',
  ],
  [
    'Ensuite il demanda à Guiv : Ô élu des héros',
    'Ensuite il demanda à Guiv :\n\n> Ô élu des héros',
  ],
  ['Puis, il dit : Ô créateur du ciel', 'Puis, il dit :\n\n> Ô créateur du ciel'],
  [
    'et lui demanda : Que s’est-il passé depuis votre départ ?',
    'et lui demanda :\n\n> Que s’est-il passé depuis votre départ ?',
  ],
  [
    'Gourguin répondit : Reprends tes sens, écoute mes paroles',
    'Gourguin répondit :\n\n> Reprends tes sens, écoute mes paroles',
  ],
  [
    'Alors, il dit à Gourguin d’une voix de tonnerre : Ô vil et méchant homme',
    'Alors, il dit à Gourguin d’une voix de tonnerre :\n\n> Ô vil et méchant homme',
  ],
  ['Puis, il dit : \n\n> Ô créateur du ciel', 'Puis, il dit :\n\n> Ô créateur du ciel'],
].forEach((useCase, index) => {
  test(`Should split '${index}'`, () => {
    // Given
    const [input, expected] = useCase;

    // When
    const result = splitSentencesOnStartOfQuotationMark(input);

    // Then
    expect(result).toBe(expected);
  });
});
