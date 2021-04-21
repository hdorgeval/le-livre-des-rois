export function removeMultipleLineFeeds(content: string): string {
  return content.replace(/\n\n\n/g, '\n\n');
}
