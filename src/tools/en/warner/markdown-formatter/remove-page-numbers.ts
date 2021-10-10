export function removePageNumbers(content: string): string {
  const result = content.replace(/\n[1-9][0-9][0-9]\n/, '');
  return result;
}
