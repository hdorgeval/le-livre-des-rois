import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import path from 'path';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

async function autoCommitEpisodesWithUpdatedTags() {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('src/markdown/')) {
      const search = unstagedFile.match(/markdown\/\d\d-(.*)\//i);
      const reign = search ? search[1] : 'reign';

      const filename = unstagedFile.split(path.sep).pop();
      const episodeNumber = Number(filename?.split('-')[0]);
      const commitMessage = `feat(${reign}): update tags in episode n° ${episodeNumber}`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}

autoCommitEpisodesWithUpdatedTags().then();
