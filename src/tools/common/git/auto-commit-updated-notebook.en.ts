import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitUpdatedEnglishNotebooks(): Promise<void> {
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;
  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];

    if (unstagedFile.includes('docs/books/en/warner/shahnama.ipynb')) {
      const commitMessage = `feat(shahnama/en): update jupyter notebook for data collecting and processing of warner edition`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}
