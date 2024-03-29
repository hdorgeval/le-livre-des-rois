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
    (content: string) => content.replace(/] : /g, ']: '),
    (content: string) => content.replace(/-Rustem/g, '- Rustem'),
    (content: string) => content.replace(/-Aulad/g, '- Aulad'),
    (content: string) => content.replace(/-Combat/g, '- Combat'),
    (content: string) => content.replace(/peuxtu/g, 'peux-tu'),
    (content: string) => content.replace(/> a /g, '> '),
    (content: string) => content.replace(/> y /, '> '),
    (content: string) => content.replace(/> Il\. /, '> Il '),
    (content: string) => content.replace(/\n\.\n/, '\n'),
    (content: string) => content.replace(/ au-près /, ' auprès '),
    (content: string) => content.replace(/toutsaint/, 'tout-saint'),
    (content: string) => content.replace(/arrièregarde/, 'arrière-garde'),
    (content: string) => content.replace(/> A0/, '> '),
    (content: string) => content.replace(/ A7 /, ' '),
    (content: string) => content.replace(/> 0,/, '> Ô,'),
    (content: string) => content.replace(/ pré-cieux /g, ' précieux '),
    (content: string) => content.replace(/ sileng-cieux /g, ' silencieux '),
    (content: string) => content.replace(/ sou-cieux /g, ' soucieux '),
    (content: string) => content.replace(/ pré-cieux /g, ' précieux '),
    (content: string) => content.replace(/\nN Le /g, '\nLe '),
    (content: string) => content.replace(/làdessus/g, 'là-dessus'),
    (content: string) => content.replace(/ toutspuissants /g, ' touts-puissants '),
    (content: string) => content.replace(/ an-ciennes/g, ' anciennes'),
    (content: string) => content.replace(/his-toire /g, 'histoire '),
    (content: string) => content.replace(/Un jour il /g, 'Un jour, il '),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
