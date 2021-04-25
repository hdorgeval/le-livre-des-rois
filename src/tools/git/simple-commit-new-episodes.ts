import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import path from 'path';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

async function autoCommitNewEpisodes(sourceFolder: string) {
  const search = sourceFolder.match(/\/\d\d-(.*)\//i);
  const reign = search ? search[1] : 'reign';

  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  // eslint-disable-next-line no-console
  console.log(status);
  const unstagedFiles = status.not_added;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes(sourceFolder)) {
      const filename = unstagedFile.split(path.sep).pop();
      const episodeNumber = Number(filename?.split('-')[0]);
      const commitMessage = `feat(${reign}): add episode n° ${episodeNumber}`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}

autoCommitNewEpisodes('/01-kaioumors/').then();
