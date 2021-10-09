import { applyRuleOnEachLine, applyRuleOnLastLine } from '.';
import { readFileSync, writeFileSync } from 'fs';

function trimLines(content: string): string {
  return content
    .split('\n\n')
    .map((line, index) => (index > 1 ? line.trim() : line))
    .join('\n\n');
}

export function formatContent(content: string): string {
  let result = content;
  [trimLines, applyRuleOnEachLine, applyRuleOnLastLine].forEach((format) => {
    result = format(result);
  });
  return result;
}

export function formatMarkdown(filepath: string): void {
  const content = readFileSync(filepath).toString();
  const parts = content.split('#');
  const markdownWithTitle = parts[1];

  const allLines = markdownWithTitle.split('\n\n');
  const title = allLines[0];
  const markdown = allLines.slice(1).join('\n\n');

  const newMarkdown = formatContent(markdown);
  const newContent = `${parts[0]}#${title}\n\n${newMarkdown}`;
  writeFileSync(filepath, newContent);
}
