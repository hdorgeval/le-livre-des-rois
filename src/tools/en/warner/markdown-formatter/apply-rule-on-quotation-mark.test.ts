import 'jest';
import { splitSentencesOnStartOfQuotationMark } from '.';

test(`Should split`, () => {
  // Given
  const input = `
And said : " Lament no more, control thyself,

Do as I bid, collect thy troops and turn

Thy foemen into dust, relieve earth's surface

Of that vile div and thine own heart of vengeance."

The famous Shah looked up and cursed his foes,`;

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

The famous Shah looked up and cursed his foes,`;

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

test(`Should split`, () => {
  // Given
  const input = `
And therefore being set on war the Shah

Sent for the prince and frankly told him all : —

" I mean to gather troops and raise the war-cry,

But thou being young shalt lead for I am spent." v. 17`;

  // When
  const result = splitSentencesOnStartOfQuotationMark(input);

  // Then
  const expected = `
And therefore being set on war the Shah

Sent for the prince and frankly told him all :

> I mean to gather troops and raise the war-cry,
>
> But thou being young shalt lead for I am spent.

v. 17`;

  expect(result).toBe(expected);
});

test(`Should split`, () => {
  // Given
  const input = `
He said, " and thou if wise must worship it."

That night he made a mighty blaze, he stood`;

  // When
  const result = splitSentencesOnStartOfQuotationMark(input);

  // Then
  const expected = `
He said,

> and thou if wise must worship it.

That night he made a mighty blaze, he stood`;

  expect(result).toBe(expected);
});
