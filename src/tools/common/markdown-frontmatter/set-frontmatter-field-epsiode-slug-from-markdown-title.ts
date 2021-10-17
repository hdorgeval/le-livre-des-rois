import { getDirectoriesRecursivelyIn, getFilesInDirectory, readAllLinesInFile } from '../fs';
import { kebabCase } from 'case-anything';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

export const setFrontmatterEpisodeSlugFromMarkdownTitleInDirectory = (
  rootDirectory: PathLike,
): void => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      // eslint-disable-next-line no-console
      console.log(`Set frontmatter field 'episode-slug' in '${file}'`);
      setFrontmatterEpsiodeSlugFromMarkdownTitleInFile(file);
    }
  }
};

export const setFrontmatterEpsiodeSlugFromMarkdownTitleInFile = (markdownFile: PathLike): void => {
  const lines = readAllLinesInFile(markdownFile);
  const lineWithTitle = lines.filter((line) => line.startsWith('# ')).shift();
  if (!lineWithTitle) {
    throw new Error(`no title found in Markdown file ${markdownFile}`);
  }
  const markdownTitle = lineWithTitle.replace('# ', '').replace('[^1]', '').trim();
  const kebabCaseTitle = kebabCase(markdownTitle);

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('episode-slug:')) {
      return `episode-slug: '${kebabCaseTitle}'`;
    }
    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

setFrontmatterEpisodeSlugFromMarkdownTitleInDirectory(
  path.join(process.cwd(), 'src', 'markdown', 'en', 'warner', '06-faridun'),
);
