export function splitSentencesOnStartOfQuotationMark(content: string): string {
  let result = content;
  let previousResult = content;

  for (let index = 0; index < 100; index++) {
    result = splitSentencesOnStartOfQuotationMarkWithSplitter(result, ' : "');
    result = splitSentencesOnStartOfQuotationMarkWithSplitter(result, ' : —\n\n"');
    result = splitSentencesOnStartOfQuotationMarkWithSplitter(result, 'said, "');
    if (result === previousResult) {
      break;
    }
    previousResult = result;
  }

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
  const formattedQuotationContent = `> ${quotationContent.trim().replace(/\n\n/g, '\n>\n> ')}`;
  const restOfContent = sentences.slice(1).join('"').trim();
  const quotationSeparator = extractQuotationSeparator(splitter);

  const result = `${beforeQuotationMark}${quotationSeparator}\n\n${formattedQuotationContent}\n\n${restOfContent}`;
  return result;
}

function extractQuotationSeparator(splitter: string): string {
  if (splitter.includes(':')) {
    return ' :';
  }

  if (splitter.includes('said, ')) {
    return 'said,';
  }

  throw new Error('Unknown separator');
}
