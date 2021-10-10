export function splitSentencesOnStartOfQuotationMark(content: string): string {
  let result = content;
  result = splitSentencesOnStartOfQuotationMarkWithSplitter(result, ' : "');
  result = splitSentencesOnStartOfQuotationMarkWithSplitter(result, ' : —\n\n"');

  return result;
}

function splitSentencesOnStartOfQuotationMarkWithSplitter(
  content: string,
  splitter: string,
): string {
  if (!content.includes(splitter)) {
    return content;
  }

  const parts = content.split(splitter);
  const beforeQuotationMark = parts[0];
  const afterQuotationMark = parts.slice(1).join(splitter);

  const sentences = afterQuotationMark.split('"');
  if (sentences.length === 1) {
    throw new Error('Expected at least one closing quotation mark');
  }

  const quotationContent = sentences[0];
  const formattedQuotationContent = `\n\n> ${quotationContent.trim().replace(/\n\n/g, '\n>\n> ')}`;
  const restOfContent = sentences.slice(1).join('"').trim();

  const result = `${beforeQuotationMark} :${formattedQuotationContent}\n\n${restOfContent}`;
  return result;
}
