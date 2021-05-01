import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitUpdatedMarkdownFormatter(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;
  unstagedFiles.push(...status.not_added);

  let hasUpdatedFiles = false;
  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('/markdown-formatter/')) {
      hasUpdatedFiles = true;
      await git.add(unstagedFile);
    }
  }
  if (hasUpdatedFiles) {
    const commitMessage = `feat(markdown): enhance markdown formatter`;
    // eslint-disable-next-line no-console
    console.log(commitMessage);
    await git.commit(commitMessage);
  }
}
