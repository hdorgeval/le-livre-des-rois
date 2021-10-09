export function correctWrongTypoFromOcr(content: string): string {
  let result = content;
  [(content: string) => content.replace(/ , /g, ', ')].forEach((format) => {
    result = format(result);
  });
  return result;
}
