export function correctWrongTypoFromOcr(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/ , /g, ', '),
    (content: string) => content.replace(/\n\(i /g, '\n" '),
    (content: string) => content.replace(/\/'\n/g, '."\n'),
    (content: string) => content.replace(/\/ /g, ",' "),
    (content: string) => content.replace(/\/\n/g, ".'\n"),
    (content: string) => content.replace(/\/' /g, '," '),
    (content: string) => content.replace(/\/\\\*\n/g, '."\n'),
    (content: string) => content.replace(/\. ,,\n/g, '."\n'),
    (content: string) => content.replace(/\. 55\n/g, '."\n'),
    (content: string) => content.replace(/\. 5 '\n/g, '."\n'),
    (content: string) => content.replace(/\/\*\n/g, '."\n'),
    (content: string) => content.replace(/: &lt;e /g, ': " '),
    (content: string) => content.replace(/ I"\n/g, ' !"\n'),
    (content: string) => content.replace(/, „\n\n/g, ',\n\n'),
    (content: string) => content.replace(/, \[\n\n/g, ',\n\n'),
    (content: string) => content.replace(/ Gaiiimart /g, ' Gaiumart '),
    (content: string) => content.replace(/ Gaiiimart/g, ' Gaiumart'),
    (content: string) => content.replace(/Gaiiimart /g, ' Gaiumart '),
    (content: string) => content.replace(/ di'v /g, ' div '),
    (content: string) => content.replace(/ di'v,/g, ' div,'),
    (content: string) => content.replace(/ dlvs,/g, ' divs,'),
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
    (content: string) => content.replace(/ Ibh's,/g, ' Iblis,'),
    (content: string) => content.replace(/ Ibh's\n/g, ' Iblis\n'),
    (content: string) => content.replace(/Za-hhak /g, 'Zahhak '),
    (content: string) => content.replace(/ Zahhik/g, ' Zahhak'),
    (content: string) => content.replace(/ Zahhkk/g, ' Zahhak'),
    (content: string) => content.replace(/ Zahh&amp;k /g, ' Zahhak '),
    (content: string) => content.replace(/ fran /g, ' Iran '),
    (content: string) => content.replace(/ Sh&amp;h /g, ' Shah '),
    (content: string) => content.replace(/ Sh4h /g, ' Shah '),
    (content: string) => content.replace(/ Karma'i'l/g, " Karma'il"),
    (content: string) => content.replace(/ Faridiin /g, ' Faridun '),
    (content: string) => content.replace(/ Farfdun/g, ' Faridun'),
    (content: string) => content.replace(/ Arnaw&amp;z /g, ' Arnawaz '),
    (content: string) => content.replace(/\^s /g, "'s "),
    (content: string) => content.replace(/ Tur&amp;n /g, ' Turan '),
    (content: string) => content.replace(/ Shahrin&amp;z/g, ' Shahrinaz'),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
