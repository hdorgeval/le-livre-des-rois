export function removeChapterArtifacts(content: string): string {
  let result = content;
  [
    (content: string) => content.replace(/KEI KHOSROU\./g, ''),
    (content: string) => content.replace(/KEÎ KHOSBOU\./g, ''),
    (content: string) => content.replace(/KEI KHOSBOU\./g, ''),
    (content: string) => content.replace(/KEÏ KHoSRoU\./g, ''),
    (content: string) => content.replace(/KEÏ KHOSROU\./g, ''),
    (content: string) => content.replace(/KEl KHOSBOU\./g, ''),
    (content: string) => content.replace(/KEI KHUSBOU\./g, ''),
    (content: string) => content.replace(/KEl KHUSllUlU\./g, ''),
    (content: string) => content.replace(/KEÏ KAOUS\./g, ''),
    (content: string) => content.replace(/KEÏ KAUUS\./g, ''),
    (content: string) => content.replace(/KEI KAOUS\./g, ''),
    (content: string) => content.replace(/KEÎ KAOUS\./g, ''),
    (content: string) => content.replace(/KEÏKOBAD\./g, ''),
    (content: string) => content.replace(/KEIKOBAD\./g, ''),
    (content: string) => content.replace(/GUEllSCHASP\./g, ''),
    (content: string) => content.replace(/GUEBSCHASP\./g, ''),
    (content: string) => content.replace(/TiUERSCHASP\./g, ''),
    (content: string) => content.replace(/KAÏOUMORS\./g, ''),
    (content: string) => content.replace(/HO U SCII E N G\./g, ''),
    (content: string) => content.replace(/THAHMOUIIAS\./g, ''),
    (content: string) => content.replace(/LE LIVRE DES BOIS\./g, ''),
    (content: string) => content.replace(/LE LIVRE DES ROIS\./g, ''),
    (content: string) => content.replace(/LE LlVRE DES ROIS\./g, ''),
    (content: string) => content.replace(/LE LlVBE DES BOIS\./g, ''),
  ].forEach((format) => {
    result = format(result);
  });
  return result;
}
