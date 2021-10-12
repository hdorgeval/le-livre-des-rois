export function removeChapterArtifacts(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/HtfSHANG/g, ''),
    (content: string) => content.replace(/TAHMURAS/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSt/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDA USf/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSf/g, ''),
    (content: string) => content.replace(/- — 1 — -/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDA USt/g, ''),
    (content: string) => content.replace(/JAMSHlD/g, ''),
    (content: string) => content.replace(/JAMSHID/g, ''),
    (content: string) => content.replace(/JAMSHtD/g, ''),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
