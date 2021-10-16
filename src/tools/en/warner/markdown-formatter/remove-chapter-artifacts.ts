export function removeChapterArtifacts(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/HtfSHANG/g, ''),
    (content: string) => content.replace(/TAHMURAS/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSt/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDA USf/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSl/g, ''),
    (content: string) => content.replace(/THE SHAhNAMA OF FIRDA USl/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSf/g, ''),
    (content: string) => content.replace(/T48 THE SHAHNAMA OF FIRDAUSf/g, ''),
    (content: string) => content.replace(/THE SHAH NAM A OF FIRDAUSt/g, ''),
    (content: string) => content.replace(/- — 1 — -/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDA USt/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDA US1/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSI/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIR DA USt/g, ''),
    (content: string) => content.replace(/the shahnAma of firda usf/g, ''),
    (content: string) => content.replace(/JAMSHlD/g, ''),
    (content: string) => content.replace(/JAMSHID/g, ''),
    (content: string) => content.replace(/JAMSHtD/g, ''),
    (content: string) => content.replace(/ZAHHAK/g, ''),
    (content: string) => content.replace(/zahhAk/g, ''),
    (content: string) => content.replace(/, v\. [1,2,3,4,5][1,2,3,4,5,6,7,8,9]\n/g, ',\n'),
    (content: string) => content.replace(/\n[V,v]\. [1,2,3,4,5][1,2,3,4,5,6,7,8,9] /g, '\n '),
    (content: string) => content.replace(/ [V,v]\. [1,2,3,4,5][1,2,3,4,5,6,7,8,9]\n/g, '\n'),
    (content: string) => content.replace(/■/g, ''),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
