import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitUpdatedFrenchTagsTools(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];

    if (unstagedFile.includes('/fr/') && unstagedFile.includes('noises.ts')) {
      const commitMessage = `chore(tags/fr): update noises dictionary`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }

    if (unstagedFile.includes('/fr/') && unstagedFile.includes('favorites.ts')) {
      const commitMessage = `chore(tags/fr): update favorites dictionary`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}
