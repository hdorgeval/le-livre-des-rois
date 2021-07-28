import simpleGit, { SimpleGit, SimpleGitOptions } from 'simple-git';
import {} from 'fs';

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};

export async function autoCommitUpdatedLatexFiles(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.modified;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('ltex.dictionary')) {
      let commitMessage = `chore(spelling-checker): update dictionary`;
      if (unstagedFile.includes('.en.')) {
        commitMessage = `chore(spelling-checker): update english dictionary`;
      }
      if (unstagedFile.includes('.fr.')) {
        commitMessage = `chore(spelling-checker): update french dictionary`;
      }
      if (unstagedFile.includes('.fa.')) {
        commitMessage = `chore(spelling-checker): update persian dictionary`;
      }
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }

    if (unstagedFile.includes('ltex.hiddenFalsePositives')) {
      let commitMessage = `chore(grammar-checker): update false-positives dictionary`;
      if (unstagedFile.includes('.en.')) {
        commitMessage = `chore(grammar-checker): update english false-positives dictionary`;
      }
      if (unstagedFile.includes('.fr.')) {
        commitMessage = `chore(grammar-checker): update french false-positives dictionary`;
      }
      if (unstagedFile.includes('.fa.')) {
        commitMessage = `chore(grammar-checker): update persian false-positives dictionary`;
      }
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }

    if (unstagedFile.includes('ltex.settings.') && unstagedFile.endsWith('.json')) {
      let commitMessage = `chore(ltex): update stand-alone ltex-ls settings`;
      if (unstagedFile.includes('.en.')) {
        commitMessage = `chore(ltex): update stand-alone ltex-ls english settings`;
      }
      if (unstagedFile.includes('.fr.')) {
        commitMessage = `chore(ltex): update stand-alone ltex-ls french settings`;
      }
      if (unstagedFile.includes('.fa.')) {
        commitMessage = `chore(ltex): update stand-alone ltex-ls persian settings`;
      }
      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}
export async function autoCommitAddedLatexDictionaryFiles(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.not_added;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('ltex.dictionary')) {
      let commitMessage = `chore(spelling-checker): add new dictionary`;
      if (unstagedFile.includes('.en.')) {
        commitMessage = `chore(spelling-checker): add new english dictionary`;
      }
      if (unstagedFile.includes('.fa.')) {
        commitMessage = `chore(spelling-checker): add new persian dictionary`;
      }

      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}

export async function autoCommitAddedLatexFalsePositivesFiles(): Promise<void> {
  // when setting all options in a single object
  const git: SimpleGit = simpleGit(options);

  const status = await git.status();
  const unstagedFiles = status.not_added;

  for (let index = 0; index < unstagedFiles.length; index++) {
    const unstagedFile = unstagedFiles[index];
    if (unstagedFile.includes('ltex.hiddenFalsePositives')) {
      let commitMessage = `chore(grammar-checker): add new false/positive dictionary`;
      if (unstagedFile.includes('.en.')) {
        commitMessage = `chore(grammar-checker): add new english false/positive dictionary`;
      }
      if (unstagedFile.includes('.fa.')) {
        commitMessage = `chore(grammar-checker): add new persian false/positive dictionary`;
      }

      await git.add(unstagedFile);
      await git.commit(commitMessage);
      // eslint-disable-next-line no-console
      console.log(commitMessage);
    }
  }
}
