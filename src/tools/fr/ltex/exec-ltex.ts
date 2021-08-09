import { readAllLinesInFile } from '../../common/fs';
import { execSync } from 'child_process';
import { PathLike } from 'fs';
import path from 'path';

export const execLtexChecker = (markdownFile: PathLike): PathLike | null => {
  const command = path.join(process.cwd(), 'ltex-ls-12.4.0/bin/ltex-ls');
  const args = `--input-documents=${markdownFile} --settings-file=${path.join(
    process.cwd(),
    'ltex-settings.fr.json',
  )}`;
  const logFile = path.join(process.cwd(), 'ltex-log.txt');
  try {
    execSync(`${command} ${args} > ${logFile}`, { stdio: 'inherit' });
    return null;
  } catch (error) {
    return logFile;
  }
};
export const numberOfDefects = (logFile: PathLike | null): number => {
  if (logFile === null) {
    return 0;
  }
  const lines = readAllLinesInFile(logFile);
  const defects = lines.filter((line) => line.includes('src/markdown/fr'));
  return defects.length;
};
