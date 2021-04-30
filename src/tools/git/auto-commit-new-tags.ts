import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import path from 'path';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitNewMarkdownTags(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  // eslint-disable-next-line no-console
  console.log(status);
  const unstagedFiles = status.not_added;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('/tags/') && unstagedFile.endsWith('.md')) {
      const filename = unstagedFile.split(path.sep).pop();
      const tagName = filename?.split('.md')[0] || filename;

      const commitMessage = `feat(tags): add description for tag ${tagName}`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}
