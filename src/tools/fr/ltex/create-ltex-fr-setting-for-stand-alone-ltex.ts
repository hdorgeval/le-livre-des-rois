import { readAllLinesInFile } from '../../common/fs';
import { writeFileSync } from 'fs';
import path from 'path';

export const syncFrSettingsFromVscode = (): void => {
  const ltexFrDictionaryFile = path.join(process.cwd(), '.vscode', 'ltex.dictionary.fr.txt');
  const frDictionary = readAllLinesInFile(ltexFrDictionaryFile).filter(
    (line) => line && line.length > 0,
  );

  const frFalsePositiveFile = path.join(
    process.cwd(),
    '.vscode',
    'ltex.hiddenFalsePositives.fr.txt',
  );
  const frFalsePositives = readAllLinesInFile(frFalsePositiveFile)
    .filter((line) => line && line.length > 0)
    .map((rawRule) => JSON.parse(rawRule));

  const frLtexLsSettings = {
    language: 'fr',
    dictionary: { fr: frDictionary },
    hiddenFalsePositives: { fr: frFalsePositives },
  };

  writeFileSync(
    path.join(process.cwd(), 'ltex-settings.fr.json'),
    JSON.stringify(frLtexLsSettings, null, 2),
  );
};

syncFrSettingsFromVscode();
