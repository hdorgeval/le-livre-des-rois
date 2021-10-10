import 'jest';
import { splitSentencesOnStartOfQuotationMark } from '.';

test(`Should split`, () => {
  // Given
  const input = `
And said : " Lament no more, control thyself,

Do as I bid, collect thy troops and turn

Thy foemen into dust, relieve earth's surface

Of that vile div and thine own heart of vengeance."

The famous Shah looked up and cursed his foes,
`;

  // When
  const result = splitSentencesOnStartOfQuotationMark(input);

  // Then
  const expected = `
And said : 

> Lament no more, control thyself,
>
> Do as I bid, collect thy troops and turn
>
> Thy foemen into dust, relieve earth's surface
>
> Of that vile div and thine own heart of vengeance.

The famous Shah looked up and cursed his foes,
`;

  expect(result).toBe(expected);
});
test(`Should not split`, () => {
  // Given
  const input = `
And said : 

> Lament no more, control thyself,
>
> Do as I bid, collect thy troops and turn
>
> Thy foemen into dust, relieve earth's surface
>
> Of that vile div and thine own heart of vengeance.

The famous Shah looked up and cursed his foes,
`;

  // When
  const result = splitSentencesOnStartOfQuotationMark(input);

  // Then
  expect(result).toBe(input);
});
