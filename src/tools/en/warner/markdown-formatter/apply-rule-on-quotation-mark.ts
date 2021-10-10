export function splitSentencesOnStartOfQuotationMark(content: string): string {
  if (!content.includes(' : "')) {
    return content;
  }

  const parts = content.split(' : "');
  const beforeQuotationMark = parts[0];
  const afterQuotationMark = parts.slice(1).join(' : "');

  const sentences = afterQuotationMark.split('"');
  if (sentences.length === 1) {
    throw new Error('Expected at least one closing quotation mark');
  }

  const quotationContent = sentences[0];
  const formattedQuotationContent = `\n\n> ${quotationContent.trim().replace(/\n\n/g, '\n>\n> ')}`;
  const restOfContent = sentences.slice(1).join('"');

  const result = `${beforeQuotationMark} : ${formattedQuotationContent}${restOfContent}`;
  return result;
}
