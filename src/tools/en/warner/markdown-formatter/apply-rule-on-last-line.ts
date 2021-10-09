export function applyRuleOnLastLine(content: string): string {
  if (content.endsWith('\n\n')) {
    return content.substr(0, content.length - 1);
  }

  if (content.endsWith('\n')) {
    return content;
  }

  return `${content}\n`;
}
