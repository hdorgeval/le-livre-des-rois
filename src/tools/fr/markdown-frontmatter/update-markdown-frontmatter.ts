/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const updateFrontmatter = (key: string) => {
  return {
    in: (markdownContent: string[]) => {
      return {
        withValues: (values: string[]): string[] => {
          let isKeyDeclaration = false;
          const result = markdownContent
            .map((line) => {
              if (isKeyDeclaration && line.endsWith(']')) {
                isKeyDeclaration = false;
                return '--remove-this-line--';
              }

              if (isKeyDeclaration) {
                return '--remove-this-line--';
              }

              if (line.startsWith(`${key}:`)) {
                isKeyDeclaration = true;
                if (line.endsWith(']')) {
                  isKeyDeclaration = false;
                }
                return `${key}: [${values.map((value) => `"${value}"`).join(', ')}]`;
              }
              return line;
            })
            .filter((line) => !line.startsWith('--remove-this-line--'));
          return result;
        },
      };
    },
  };
};
