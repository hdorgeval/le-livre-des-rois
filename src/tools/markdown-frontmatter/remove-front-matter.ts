export const removeFrontMatterIn = (lines: string[]): string[] => {
  if (lines.length === 0) {
    return [];
  }

  if (lines[0] !== '---') {
    return [...lines];
  }

  let isLineInFrontMatter = true;
  const result = lines
    .map((line, index) => {
      if (index === 0) {
        return '--remove-this-line--';
      }
      if (isLineInFrontMatter && line !== '---') {
        return '--remove-this-line--';
      }
      if (line === '---') {
        isLineInFrontMatter = false;
        return '--remove-this-line--';
      }
      return line;
    })
    .filter((line) => !line.startsWith('--remove-this-line--'));

  return result;
};
