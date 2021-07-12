import { formatMarkdown } from '../markdown-formatter';
import { getFilesInDirectory } from '../common/fs';
import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import path from 'path';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function formatEpisodeAndCommit(filepath: string): Promise<void> {
  formatMarkdown(filepath);
  const formattedFilename = filepath.split(path.sep).pop() || 'unknown';
  const search = filepath.match(/src\/markdown\/\d\d-(.*)\//i);
  const reign = search ? search[1] : 'reign';

  // eslint-disable-next-line no-console
  console.log(search);
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes(formattedFilename)) {
      const filename = unstagedFile.split(path.sep).pop();
      const episodeNumber = Number(filename?.substring(0, 3));
      const commitMessage = `feat(${reign}): format episode n° ${episodeNumber}`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}

async function formatEpisodesIn(folder: string, start: number, end: number) {
  const files = getFilesInDirectory(folder, (filepath) => {
    const filename = filepath.split(path.sep).pop();
    const episodeNumber = Number(filename?.substring(0, 3));
    if (episodeNumber >= start && episodeNumber <= end) {
      return true;
    }
    return false;
  });

  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    await formatEpisodeAndCommit(file).then();
  }
}

formatEpisodesIn('src/markdown/06-feridoun', 1, 27);
