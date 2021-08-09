import { syncFrSettingsFromVscode } from './create-ltex-fr-setting-for-stand-alone-ltex';
import { execLtexChecker } from './exec-ltex';
import {
  getDirectoriesRecursivelyIn,
  getFilesInDirectory,
  readAllLinesInFile,
} from '../../common/fs';
import { PathLike, writeFileSync } from 'fs';
import path from 'path';

export const createRulesFromLtex = (rootDirectory: PathLike): string[] => {
  const rules = [];
  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  for (let index = 0; index < directories.length; index++) {
    const directory = directories[index];
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));

    for (let index2 = 0; index2 < files.length; index2++) {
      const file = files[index2];
      // eslint-disable-next-line no-console
      console.log(`checking spelling in '${file}'`);
      const logFile = execLtexChecker(file);
      rules.push(...processLog(logFile));
    }
  }
  return rules;
};

export const processLog = (logFile: PathLike | null): string[] => {
  if (logFile === null) {
    return [];
  }

  const lines = readAllLinesInFile(logFile);
  const results = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const currentIndex = i;
    if (
      line.includes('src/markdown/fr') &&
      line.endsWith('[FR_SPELLING_RULE]') &&
      currentIndex < lines.length - 3 &&
      lines[currentIndex + 3].includes('src/markdown/fr')
    ) {
      const word = line.split("'")[1];
      const replacement = lines[currentIndex + 2].trim();
      const rule = `${word} => ${replacement}`;
      results.push(rule);
    }
  }
  return results;
};

syncFrSettingsFromVscode();
const rules = createRulesFromLtex(path.join(process.cwd(), 'src/markdown/fr/50-yezdegird'));
// eslint-disable-next-line no-console
console.log(rules);
const replacers = rules.map((rule) => {
  const [word, replacement] = rule.split(' => ');
  if (replacement.includes("'")) {
    return `(content: string) => content.replace(/${word.replace('.', '\\.')}/, "${replacement}"),`;
  }
  return `(content: string) => content.replace(/${word.replace('.', '\\.')}/, '${replacement}'),`;
});

writeFileSync(path.join(__dirname, 'replacers.fr.txt'), replacers.join('\n'));
