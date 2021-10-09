import { readFileSync, writeFileSync } from 'fs';

function trimLines(content: string): string {
  return content
    .split('\n\n')
    .map((line, index) => (index > 1 ? line.trim() : line))
    .join('\n\n');
}

export function formatContent(content: string): string {
  let result = content;
  [trimLines].forEach((format) => {
    result = format(result);
  });
  return result;
}

export function formatMarkdown(filepath: string): void {
  const content = readFileSync(filepath).toString();
  const parts = content.split('#');
  const markdown = parts[1];

  const newMarkdown = formatContent(markdown);
  const newContent = `${parts[0]}#${newMarkdown}`;
  writeFileSync(filepath, newContent);
}
