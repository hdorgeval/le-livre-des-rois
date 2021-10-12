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

test(`Should split`, () => {
  // Given
  const input = `
For such a radiant gift. He made of fire

A cynosure. " This lustre is divine,"

He said,`;

  // When
  const result = splitSentencesOnStartOfQuotationMark(input);

  // Then
  const expected = `
For such a radiant gift. He made of fire

A cynosure.

> This lustre is divine,

He said,`;

  expect(result).toBe(expected);
});

test(`Should split`, () => {
  // Given
  const input = `
Ox, ass, and sheep he turned them to good use.

" Pair them," he said,

> use them for toil, enjoy
>
> Their produce, and provide therewith your taxes.`;

  // When
  const result = splitSentencesOnStartOfQuotationMark(input);

  // Then
  const expected = `
Ox, ass, and sheep he turned them to good use.

> Pair them,

he said,

> use them for toil, enjoy
>
> Their produce, and provide therewith your taxes.`;

  expect(result).toBe(expected);
});

test(`Should split`, () => {
  // Given
  const input = `
What said the noble man and eloquent ?

"'Tis idleness that maketh freemen slaves."

The fourth caste was the artizans. They live`;

  // When
  const result = splitSentencesOnStartOfQuotationMark(input);

  // Then
  const expected = `
What said the noble man and eloquent ?

> 'Tis idleness that maketh freemen slaves.

The fourth caste was the artizans. They live`;

  expect(result).toBe(expected);
});
test(`Should split`, () => {
  // Given
  const input = `
The chiefs, and what a wealth of words he used !

" The world is mine, I found its properties,

The royal throne hath seen no king like me,

For I have decked the world with excellence

And fashioned earth according to my will."

From me derive your provand, ease, and sleep,`;

  // When
  const result = splitSentencesOnStartOfQuotationMark(input);

  // Then
  const expected = `
The chiefs, and what a wealth of words he used !

> The world is mine, I found its properties,
>
> The royal throne hath seen no king like me,
>
> For I have decked the world with excellence
>
> And fashioned earth according to my will.

From me derive your provand, ease, and sleep,`;

  expect(result).toBe(expected);
});

test(`Should split`, () => {
  // Given
  const input = `
Iblis rejoined,

" Art perjured and wilt still be despicable,

Thy father honoured."

Thus he snared the Arab,

Who asked :

> What must I do ? I will obey.`;

  // When
  const result = splitSentencesOnStartOfQuotationMark(input);

  // Then
  const expected = `
Iblis rejoined,

> Art perjured and wilt still be despicable,
>
> Thy father honoured.

Thus he snared the Arab,

Who asked :

> What must I do ? I will obey.`;

  expect(result).toBe(expected);
});
