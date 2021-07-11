import { getFilesInDirectory, getDirectoriesRecursivelyIn, readAllLinesInFile } from '../fs';
import { PathLike, writeFileSync } from 'fs';
import { EOL } from 'os';
import path from 'path';

const reignMapping: Record<string, string> = {
  firdousi: 'Firdousi',
  kaioumors: 'Kaïoumors',
  houscheng: 'Houscheng',
  thamouras: 'Thahmouras',
  djemschid: 'Djemschid',
  zohak: 'Zohak',
  feridoun: 'Feridoun',
  minoutchehr: 'Minoutchehr',
  newder: 'Newder',
  zew: 'Zew',
  guerschasp: 'Guerschasp',
  kobad: 'Keïkobad',
  kaous: 'Keï Kaous',
  khosrou: 'Keï Khosrou',
  lohrasp: 'Lohrasp',
  guschtasp: 'Guschtasp',
  bahman: 'Bahman',
  homai: 'Homaï',
  darab: 'Darab',
  dara: 'Dara',
  iskender: 'Iskender',
  'lohrasp/zoroastre': 'Lohrasp',
};

export const addFrontmatterField = (rootDirectory: PathLike): void => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  directories.forEach((directory) => {
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));
    files.forEach((file) => {
      // eslint-disable-next-line no-console
      console.log(`adding frontmatter field 'reign' in '${file}'`);
      addFrontmatterFieldIn(file);
    });
  });
};

export const addFrontmatterFieldIn = (markdownFile: PathLike): void => {
  const lines = readAllLinesInFile(markdownFile);
  const search = markdownFile.toString().match(/markdown\/fr\/\d\d-(.*)\//i);
  const reign = search ? search[1] : '';
  const formattedReign = reignMapping[reign] || reign;

  const refactoredLines = lines.map((line) => {
    if (line.startsWith('source: ')) {
      return [line, `reign: '${formattedReign}'`].join(EOL);
    }

    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

addFrontmatterField(path.join(process.cwd(), 'src', 'markdown', 'fr'));
