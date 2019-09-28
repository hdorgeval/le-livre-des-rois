export const updateFrontmatter = (key: string) => {
  return {
    in: (markdownContent: string[]) => {
      return {
        withValues: (values: string[]): string[] => {
          const result = markdownContent.map((line) => {
            if (line.startsWith(`${key}: `)) {
              return `${key}: [${values.map((value) => `"${value}"`).join(', ')}]`;
            }
            return line;
          });
          return result;
        },
      };
    },
  };
};
