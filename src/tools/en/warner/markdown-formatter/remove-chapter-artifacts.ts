export function removeChapterArtifacts(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/HtfSHANG/g, ''),
    (content: string) => content.replace(/THE SHAHNAMA OF FIRDAUSt/g, ''),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
