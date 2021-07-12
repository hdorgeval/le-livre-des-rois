import {
  getFilesInDirectory,
  getDirectoriesRecursivelyIn,
  readAllLinesInFile,
} from '../../common/fs';
import { PathLike, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { EOL } from 'os';

const reignMapping: Record<string, string> = {
  '00-firdousi': 'about',
  '01-kaioumors': 'regne-de-kaioumors',
  '02-houscheng': 'regne-de-houscheng',
  '03-thamouras': 'regne-de-thamouras',
  '04-djemschid': 'regne-de-djemschid',
  '05-zohak': 'regne-de-zohak',
  '06-feridoun': 'regne-de-feridoun',
  '07-minoutchehr': 'regne-de-minoutchehr',
  '08-newder': 'regne-de-newder',
  '09-zew': 'regne-de-zew',
  '10-guerschasp': 'regne-de-guerschasp',
  '11-kobad': 'regne-de-kobad',
  '12-kaous': 'regne-de-kaous',
  '13-khosrou': 'regne-de-khosrou',
  '14-lohrasp': 'regne-de-lohrasp',
  '15-guschtasp': 'regne-de-guschtasp',
  '16-bahman': 'regne-de-bahman',
  '17-homai': 'regne-de-homai',
  '18-darab': 'regne-de-darab',
  '19-dara': 'regne-de-dara',
  '20-iskender': 'regne-de-iskender',
  '21-aschkanides': 'regne-des-aschkanides',
  '22-ardeschir-babekan': 'regne-de-ardeschir-babekan',
  '23-schapour': 'regne-de-schapour',
  '24-ormuzd': 'regne-d-ormuzd',
  '25-bahram-fils-d-ormuzd': 'regne-de-bahram-fils-d-ormuzd',
  '26-bahram-fils-de-bahram': 'regne-de-bahram-fils-de-bahram',
  '27-bahram-bahramian': 'regne-de-bahram-bahramian',
  '28-nersi': 'regne-de-nersi',
  '29-ormuzd-fils-de-nersi': 'regne-d-ormuzd-fils-de-nersi',
  '30-schapour-dhoul-aktaf': 'regne-de-schapour-dhoul-aktaf',
  '31-ardeschir-le-bon': 'regne-d-ardeschir-le-bon',
  '32-schapour-fils-de-schapour': 'regne-de-schapour-fils-de-schapour',
  '33-bahram-fils-de-schapour': 'regne-de-bahram-fils-de-schapour',
  '34-yezdeguerd': 'regne-de-yezdeguerd',
  '35-bahram-gour': 'regne-de-bahram-gour',
  '36-yezdeguerd-fils-de-bahram': 'regne-de-yezdeguerd-fils-de-bahram',
  '37-hormuz': 'regne-de-hormuz',
  '38-pirouz': 'regne-de-pirouz',
  '39-balasch': 'regne-de-balasch',
  '40-kobad-fils-de-pirouz': 'regne-de-kobad-fils-de-pirouz',
  '41-nouschirwan': 'regne-de-nouschirwan',
  '42-hormuzd': 'regne-de-hormuzd',
  '43-khosrou-parviz': 'regne-de-khosrou-parviz',
  '44-kobad-fils-de-parviz': 'regne-de-kobad-fils-de-parviz',
  '45-ardeschir-fils-de-schiroui': 'regne-de-ardeschir-fils-de-schiroui',
  '46-guraz': 'regne-de-guraz',
  '47-pourandokht': 'regne-de-pourandokht',
  '48-azermidokht': 'regne-de-azermidokht',
  '49-farrukhzad': 'regne-de-farrukhzad',
  '50-yezdegird': 'regne-de-yezdegird',
  '14-lohrasp/zoroastre': 'regne-de-lohrasp',
};
export const addFrontmatterField = (rootDirectory: PathLike): void => {
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  directories.forEach((directory) => {
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));
    files.forEach((file) => {
      // eslint-disable-next-line no-console
      console.log(`adding frontmatter field 'reign-slug' in '${file}'`);
      addFrontmatterFieldIn(file);
    });
  });
};

export const addFrontmatterFieldIn = (markdownFile: PathLike): void => {
  const fileContent = readFileSync(markdownFile);
  if (fileContent.includes('reign-slug')) {
    // eslint-disable-next-line no-console
    console.log(`File ${markdownFile} already processed`);
    return;
  }

  const lines = readAllLinesInFile(markdownFile);
  const search = markdownFile.toString().match(/markdown\/fr\/(\d\d-.*)\//i);
  const reign = search ? search[1] : '';
  const slug = reignMapping[reign] || '';
  const refactoredLines = lines.map((line) => {
    if (line.startsWith('reign: ')) {
      return [line, `reign-slug: '${slug}'`].join(EOL);
    }

    return line;
  });
  writeFileSync(markdownFile, refactoredLines.join(EOL));
};

addFrontmatterField(path.join(process.cwd(), 'src', 'markdown', 'fr'));
