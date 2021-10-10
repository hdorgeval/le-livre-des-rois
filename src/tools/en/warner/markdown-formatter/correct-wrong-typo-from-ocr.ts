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
    (content: string) => content.replace(/ dfv's /g, " div's "),
    (content: string) => content.replace(/ Dfv/g, ' Div'),
    (content: string) => content.replace(/Dfv /g, 'Div '),
    (content: string) => content.replace(/ 1\n/g, '\n'),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
