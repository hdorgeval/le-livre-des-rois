export function removeChapterArtifacts(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/HtfSHANG/g, ''),
    (content: string) => content.replace(/TAHMURAS/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSt/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDA USf/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSl/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSf/g, ''),
    (content: string) => content.replace(/- — 1 — -/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDA USt/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDA US1/g, ''),
    (content: string) => content.replace(/JAMSHlD/g, ''),
    (content: string) => content.replace(/JAMSHID/g, ''),
    (content: string) => content.replace(/JAMSHtD/g, ''),
    (content: string) => content.replace(/, v\. [1,2,3][1,2,3,4]\n/g, ',\n'),
    (content: string) => content.replace(/\n[V,v]\. [1,2,3][1,2,3,4] /g, '\n '),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
