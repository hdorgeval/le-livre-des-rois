import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitUpdatedLtexDocumentation(): Promise<void> {
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;
  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];

    if (unstagedFile.includes('docs/ltex-language-server/README.md')) {
      const commitMessage = `docs(ltex): update project documentation on ltex`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}
