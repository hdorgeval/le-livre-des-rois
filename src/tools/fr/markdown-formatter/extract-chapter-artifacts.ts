import { getFilesInDirectory, getDirectoriesRecursivelyIn } from '../../common/fs';
import { PathLike, readFileSync, writeFileSync } from 'fs';
import path from 'path';
export const extractChapterArtifacts = (foundArtifacts: string[]): void => {
  const rootDirectory = path.join(process.cwd(), 'src', 'markdown', 'fr');

  const directories = getDirectoriesRecursivelyIn(rootDirectory).takeAll();
  directories.push(rootDirectory.toString());
  directories.forEach((directory) => {
    if (directory.includes('00-firdousi')) {
      return;
    }
    const files = getFilesInDirectory(directory, (path) => path.endsWith('.md'));
    files.forEach((file) => {
      // eslint-disable-next-line no-console
      console.log(`extracting chapter artifacts in '${file}'`);
      extractChapterArtifactsIn(file, foundArtifacts);
    });
  });
};

export const extractChapterArtifactsIn = (
  markdownFile: PathLike,
  foundArtifacts: string[],
): void => {
  const content = readFileSync(markdownFile).toString();

  const search = content.match(/([\]A-Z\s0-9'’lÎÏ)(]{4,}\.)/g);
  const artifacts = search && search.length > 1 && search;
  if (artifacts) {
    foundArtifacts.push(...artifacts.map((artifact) => artifact.replace(/\n/g, '')));
  }
};

const allArtifacts: string[] = [];
extractChapterArtifacts(allArtifacts);
const artifacts = new Set(allArtifacts);
const allEntries = Array.from(artifacts);
const allSortedEntries = allEntries.sort((a, b) => b.length - a.length);
const predicates = allSortedEntries.map((entry) => {
  const regex = entry.replace(/\./g, '\\.').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  return `(content: string) => content.replace(/${regex}/g, ''),`;
});

writeFileSync(path.join(__dirname, 'predicates.txt'), predicates.join('\n'));
