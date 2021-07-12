import { getFilesInDirectory, getDirectoriesRecursivelyIn, readAllLinesInFile } from '../common/fs';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

export const addLtexFrSetting = (rootDirectory: PathLike): void => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      // eslint-disable-next-line no-console
      console.log(`adding frontmatter field 'title' in '${file}'`);
      addLtexFrSettingIn(file);
    }
  }
};

export const addLtexFrSettingIn = (markdownFile: PathLike): void => {
  const lines = readAllLinesInFile(markdownFile);
  const ltexLine = '<!-- LTeX: language=fr -->';

  let frontMatterCloseLineNumber: number | undefined = undefined;

  if (lines.some((line) => line.includes(ltexLine))) {
    // eslint-disable-next-line no-console
    console.log(`already added to '${markdownFile}'`);
    return;
  }
  lines.forEach((line, index) => {
    if (index > 1 && line === '---') {
      frontMatterCloseLineNumber = index;
    }
  });

  if (!frontMatterCloseLineNumber) {
    throw new Error(`no frontmatter section found`);
  }

  const refactoredLines = [
    ...lines.slice(0, frontMatterCloseLineNumber + 1),
    '',
    `${ltexLine}`,
    ...lines.slice(frontMatterCloseLineNumber + 1),
  ];
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

addLtexFrSetting(path.join(process.cwd(), 'src', 'tags', 'fr'));
