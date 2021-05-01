import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import path from 'path';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

async function autoCommitUpdatedTags(sourceFolder: string) {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes(sourceFolder)) {
      const filename = unstagedFile.split(path.sep).pop();
      const tagName = filename?.split('.md')[0] || filename;

      const commitMessage = `chore(tags): update description for the '${tagName}' tag `;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}

autoCommitUpdatedTags('/tags/').then();
