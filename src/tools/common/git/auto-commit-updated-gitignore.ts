import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitUpdatedGitIgnore(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;

  let hasUpdatedFiles = false;
  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('/.gitignore')) {
      hasUpdatedFiles = true;
      await git.add(unstagedFile);
    }
  }
  if (hasUpdatedFiles) {
    const commitMessage = `chore(git): update .gitignore file`;
    // eslint-disable-next-line no-console
    console.log(commitMessage);
    await git.commit(commitMessage);
  }
}
