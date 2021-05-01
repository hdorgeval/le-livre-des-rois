import {
  autoCommitNewGitHelpers,
  autoCommitNewMarkdownTags,
  autoCommitUpdatedGenealogy,
  autoCommitUpdatedGitHelpers,
  autoCommitUpdatedLatexFiles,
  autoCommitUpdatedMarkdownFormatter,
  autoCommitUpdatedTagsTools,
} from '.';

async function autoCommit() {
  await autoCommitUpdatedMarkdownFormatter().then();
  await autoCommitUpdatedLatexFiles().then();
  await autoCommitUpdatedGenealogy().then();
  await autoCommitUpdatedTagsTools().then();
  await autoCommitNewMarkdownTags().then();
  await autoCommitNewGitHelpers().then();
  await autoCommitUpdatedGitHelpers().then();
}

autoCommit().then();
