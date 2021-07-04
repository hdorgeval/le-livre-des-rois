import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import path from 'path';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitNewGeoData(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.not_added;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('/gis/') && unstagedFile.endsWith('.geojson')) {
      const filename = unstagedFile.split(path.sep).pop();
      const tagName = filename?.split('.geojson')[0] || filename;

      const commitMessage = `feat(geo-data): add geo data for ${tagName}`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}

export async function autoCommitUpdatedGeoData(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('/gis/') && unstagedFile.endsWith('.geojson')) {
      const filename = unstagedFile.split(path.sep).pop();
      const tagName = filename?.split('.geojson')[0] || filename;

      const commitMessage = `feat(geo-data): update geo data of ${tagName}`;
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}
