import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import path from 'path';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitFormattedEpisodes(sourceFolder: string): Promise<void> {
  const search = sourceFolder.match(/\/\d\d-(.*)\//i);
  const reign = search ? search[1] : 'reign';

  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  // eslint-disable-next-line no-console
  console.log(status);
  const unstagedFiles = status.modified;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes(sourceFolder)) {
      const filename = unstagedFile.split(path.sep).pop();
      const episodeNumber = Number(filename?.split('-')[0]);
      const commitMessage = `feat(${reign}): format episode n° ${episodeNumber}`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}

autoCommitFormattedEpisodes('/01-kaioumors/').then();
