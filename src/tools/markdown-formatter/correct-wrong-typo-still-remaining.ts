export function correctWrongTypoStillRemainingAfterAutoFormat(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/ \.\n\n/g, '.\n\n'),
    (content: string) => content.replace(/ \.0 /g, ' Ô '),
    (content: string) => content.replace(/ 0 /g, ' Ô '),
    (content: string) => content.replace(/ O /g, ' Ô '),
    (content: string) => content.replace(/, n /g, ', '),
    (content: string) => content.replace(/, rr /g, ', '),
    (content: string) => content.replace(/Alors il /g, 'Alors, il '),
    (content: string) => content.replace(/Bustem/g, 'Rustem'),
    (content: string) => content.replace(/Keîanides/g, 'Keïanides'),
    (content: string) => content.replace(/Puis il /g, 'Puis, il '),
    (content: string) => content.replace(/ luimême/g, ' lui-même'),
    (content: string) => content.replace(/,et /g, ', et '),
    (content: string) => content.replace(/Quelques\.-uns /g, 'Quelques-uns '),
    (content: string) => content.replace(/et à la fin il/g, 'et à la fin, il'),
    (content: string) => content.replace(/Ensuite il /g, 'Ensuite, il '),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
