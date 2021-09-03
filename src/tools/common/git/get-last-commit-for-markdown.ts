import simpleGit, { DefaultLogFields, ListLogLine, SimpleGit, SimpleGitOptions } from 'simple-git';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function getLastCommitForUpdatedContentOf(
  filepath: string,
): Promise<(DefaultLogFields & ListLogLine) | null> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const fileHistory = await git.log({ file: filepath });
  const mostRecent = fileHistory.all
    .filter((history) => !history.message.includes('refacto'))
    .shift();
  const oldest = [...fileHistory.all].pop();
  const latest = fileHistory.latest?.message?.includes('refacto') ? null : fileHistory.latest;

  return mostRecent || latest || oldest || null;
}
