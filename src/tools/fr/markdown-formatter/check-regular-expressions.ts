import { readAllLinesInFile } from '../../common/fs';
import { PathLike } from 'fs';

export function ensureDotCharactersAreEscapedIn(filename: PathLike): void {
  const lines = readAllLinesInFile(filename);

  const hasUnescapedCharacters = lines
    .filter((line) => line.includes('.replace(/'))
    .filter((line) => line.includes('.'))
    .map((line) => line.split('(/')[1].split('/g')[0])
    .some((line) => {
      if (line.match(/[^\\]\./)) {
        // eslint-disable-next-line no-console
        console.log(`regex '/${line}/' is missing escape character`);
        return true;
      }
      return false;
    });

  if (hasUnescapedCharacters) {
    throw new Error(`file '${filename}' has wrong regular expressions`);
  }
}

export function ensureQuestionMarkCharactersAreEscapedIn(filename: PathLike): void {
  const lines = readAllLinesInFile(filename);

  const hasUnescapedCharacters = lines
    .filter((line) => line.includes('.replace(/'))
    .filter((line) => line.includes('.'))
    .map((line) => line.split('(/')[1].split('/g')[0])
    .some((line) => {
      if (line.match(/[^\\]\?/)) {
        // eslint-disable-next-line no-console
        console.log(`regex '/${line}/' is missing escape character`);
        return true;
      }
      return false;
    });

  if (hasUnescapedCharacters) {
    throw new Error(`file '${filename}' has wrong regular expressions`);
  }
}

export function ensureParentethisCharactersAreEscapedIn(filename: PathLike): void {
  const lines = readAllLinesInFile(filename);

  const hasUnescapedCharacters = lines
    .filter((line) => line.includes('.replace(/'))
    .filter((line) => line.includes('.'))
    .map((line) => line.split('(/')[1].split('/g')[0])
    .some((line) => {
      if (line.match(/[^\\]\(/)) {
        // eslint-disable-next-line no-console
        console.log(`regex '/${line}/' is missing escape character`);
        return true;
      }
      return false;
    });

  if (hasUnescapedCharacters) {
    throw new Error(`file '${filename}' has wrong regular expressions`);
  }
}

export function ensureBracketCharactersAreEscapedIn(filename: PathLike): void {
  const lines = readAllLinesInFile(filename);

  const hasUnescapedCharacters = lines
    .filter((line) => line.includes('.replace(/'))
    .filter((line) => line.includes('.'))
    .map((line) => line.split('(/')[1].split('/g')[0])
    .some((line) => {
      if (line.match(/[^\\]\[/)) {
        // eslint-disable-next-line no-console
        console.log(`regex '/${line}/' is missing escape character`);
        return true;
      }
      return false;
    });

  if (hasUnescapedCharacters) {
    throw new Error(`file '${filename}' has wrong regular expressions`);
  }
}

export function ensureSpecialCharactersAreEscapedIn(filename: PathLike): void {
  ensureDotCharactersAreEscapedIn(filename);
  ensureQuestionMarkCharactersAreEscapedIn(filename);
  ensureParentethisCharactersAreEscapedIn(filename);
  ensureBracketCharactersAreEscapedIn(filename);
}
