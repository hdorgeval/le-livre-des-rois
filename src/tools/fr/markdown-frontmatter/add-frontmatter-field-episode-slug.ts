import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
} from '../../common/fs';
import { PathLike, writeFileSync } from 'fs';
import path from 'path';
import { EOL } from 'os';

export const addFrontmatterField = (rootDirectory: PathLike): void => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      // eslint-disable-next-line no-console
      console.log(`adding frontmatter field 'episode-slug' in '${file}'`);
      addFrontmatterFieldIn(file);
    }
  }
};

export const addFrontmatterFieldIn = (markdownFile: PathLike): void => {
  const lines = readAllLinesInFile(markdownFile);
  const filename = path.basename(markdownFile.toString(), '.md');

  const matches = filename.match(/^([0-9]{1,3})-(.*)$/);
  const episodeName = matches && matches.length === 3 ? matches[2] : filename;
  const episodeSlug = episodeName.replace(/[\s']/g, '-');

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('reign-slug:')) {
      return [line, `episode-slug: '${episodeSlug}'`].join(EOL);
    }
    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

addFrontmatterField(path.join(process.cwd(), 'src', 'markdown', 'fr'));
