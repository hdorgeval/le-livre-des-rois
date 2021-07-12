export function removeNonBreakableSpaces(content: string): string {
  let result = content;
  const specialWhiteSpace = String.fromCharCode(8239);
  for (let index = 0; index < 1000; index++) {
    const lenghtBefore = result.length;
    // prettier-ignore
    result = result
      .replace(`${specialWhiteSpace} `, ' ')
      .replace(` ${specialWhiteSpace}`, ' ');

    const lengthAfter = result.length;
    if (lenghtBefore === lengthAfter) {
      break;
    }
  }
  return result;
}
