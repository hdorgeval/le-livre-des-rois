import 'jest';
import { applyRuleOnEachLine } from '.';

test(`Should not apply rule on quotation content`, () => {
  // Given
  const input = `And said : 

> Lament no more, control thyself,
>
> Do as I bid, collect thy troops and turn
>
> Thy foemen into dust, relieve earth's surface
>
> Of that vile div and thine own heart of vengeance.

The famous Shah looked up and cursed his foes,`;

  // When
  const result = applyRuleOnEachLine(input);

  // Then
  expect(result).toBe(input);
});

test(`Should apply rule`, () => {
  // Given
  const input = `What saith the rustic bard ? Who first designed
To gain the crown of power among mankind ?
Who placed the diadem upon his brow ?
The record of those days hath perished now`;

  // When
  const result = applyRuleOnEachLine(input);

  // Then
  const expected = `What saith the rustic bard ? Who first designed

To gain the crown of power among mankind ?

Who placed the diadem upon his brow ?

The record of those days hath perished now`;

  expect(result).toBe(expected);
});

test(`Should not apply rule twice`, () => {
  // Given
  const input = `What saith the rustic bard ? Who first designed

To gain the crown of power among mankind ?

Who placed the diadem upon his brow ?

The record of those days hath perished now`;

  // When
  const result = applyRuleOnEachLine(input);

  // Then
  expect(result).toBe(input);
});
