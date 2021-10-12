export function correctWrongTypoFromOcr(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/ , /g, ', '),
    (content: string) => content.replace(/\/'\n/g, '."\n'),
    (content: string) => content.replace(/ I"\n/g, ' !"\n'),
    (content: string) => content.replace(/, „\n\n/g, ',\n\n'),
    (content: string) => content.replace(/, \[\n\n/g, ',\n\n'),
    (content: string) => content.replace(/ Gaiiimart /g, ' Gaiumart '),
    (content: string) => content.replace(/ Gaiiimart/g, ' Gaiumart'),
    (content: string) => content.replace(/Gaiiimart /g, ' Gaiumart '),
    (content: string) => content.replace(/ di'v /g, ' div '),
    (content: string) => content.replace(/ di'v,/g, ' div,'),
    (content: string) => content.replace(/ Di'v /g, ' Div '),
    (content: string) => content.replace(/ dfv's /g, " div's "),
    (content: string) => content.replace(/ dfv /g, ' div '),
    (content: string) => content.replace(/ di'vs /g, ' divs '),
    (content: string) => content.replace(/ Dfv/g, ' Div'),
    (content: string) => content.replace(/Dfv /g, 'Div '),
    (content: string) => content.replace(/ 1\n/g, '\n'),
    (content: string) => content.replace(/ 2\n/g, '\n'),
    (content: string) => content.replace(/Hiishang/g, 'Hushang'),
    (content: string) => content.replace(/, " "\n/g, ',\n'),
    (content: string) => content.replace(/\n\\ /g, '\n'),
    (content: string) => content.replace(/\n\/ /g, '\n'),
    (content: string) => content.replace(/\n\. /g, '\n'),
    (content: string) => content.replace(/\n, /g, '\n'),
    (content: string) => content.replace(/\n- /g, '\n'),
    (content: string) => content.replace(/\n! /g, '\n'),
    (content: string) => content.replace(/Jamshi'd/g, 'Jamshid'),
    (content: string) => content.replace(/, y\.\n/g, ',\n'),
    (content: string) => content.replace(/\. '\n/g, '.\n'),
    (content: string) => content.replace(/ Iblls /g, ' Iblis '),
    (content: string) => content.replace(/ Iblfs /g, ' Iblis '),
    (content: string) => content.replace(/\nIblfs /g, '\nIblis '),
    (content: string) => content.replace(/ IbHs /g, ' Iblis '),
    (content: string) => content.replace(/ Ibh's\n/g, ' Iblis\n'),
    (content: string) => content.replace(/Za-hhak /g, 'Zahhak '),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
