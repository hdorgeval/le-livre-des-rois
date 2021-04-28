import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitUpdatedGitHelpers(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  // eslint-disable-next-line no-console
  console.log(status);
  const unstagedFiles = status.modified;

  let hasUpdatedFiles = false;
  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('/tools/git/')) {
      hasUpdatedFiles = true;
      await git.add(unstagedFile);
    }
  }
  if (hasUpdatedFiles) {
    const commitMessage = `feat(tools): update git helpers`;
    await git.commit(commitMessage);
  }
}

export async function autoCommitNewGitHelpers(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  // eslint-disable-next-line no-console
  console.log(status);
  const unstagedFiles = status.not_added;

  let hasUpdatedFiles = false;
  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('/tools/git/')) {
      hasUpdatedFiles = true;
      await git.add(unstagedFile);
    }
  }
  if (hasUpdatedFiles) {
    const commitMessage = `feat(tools): add git helpers`;
    await git.commit(commitMessage);
  }
}
