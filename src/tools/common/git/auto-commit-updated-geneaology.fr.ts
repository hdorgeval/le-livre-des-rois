import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import path from 'path';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitUpdatedFrenchGenealogy(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('/graphs/fr/')) {
      const filename = unstagedFile.split(path.sep).pop();
      const graphName = filename?.split('.')[0] || filename;
      const graphType = filename?.split('.')[1] || 'mmd';
      let commitMessage = `feat(${graphName}/fr): update genealogy graph`;
      if (graphType === 'svg') {
        commitMessage = `feat(${graphName}/fr): update genealogy chart`;
      }
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}
