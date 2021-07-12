export function removeDuplicatedSpaces(content: string): string {
  let result = content;
  const lenghtBefore = result.length;
  for (let index = 0; index < 1000; index++) {
    result = result.replace('  ', ' ');
    const lengthAfter = result.length;
    if (lenghtBefore === lengthAfter) {
      break;
    }
  }
  return result;
}
