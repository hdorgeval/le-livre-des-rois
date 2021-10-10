export function correctWrongTypoFromOcr(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/ , /g, ', '),
    (content: string) => content.replace(/, „\n\n/g, ',\n\n'),
    (content: string) => content.replace(/, \[\n\n/g, ',\n\n'),
    (content: string) => content.replace(/ Gaiiimart /g, ' Gaiumart '),
    (content: string) => content.replace(/ Gaiiimart/g, ' Gaiumart'),
    (content: string) => content.replace(/Gaiiimart /g, ' Gaiumart '),
    (content: string) => content.replace(/ di'v /g, ' div '),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
