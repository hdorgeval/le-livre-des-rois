import {
  autoCommitNewGitHelpers,
  autoCommitNewMarkdownTags,
  autoCommitUpdatedGenealogy,
  autoCommitUpdatedGitHelpers,
  autoCommitUpdatedLatexFiles,
  autoCommitUpdatedMarkdownFormatter,
  autoCommitUpdatedMarkdownTags,
  autoCommitUpdatedMarkdownTagsHelpers,
  autoCommitUpdatedTagsTools,
} from '.';

async function autoCommit() {
  await autoCommitUpdatedMarkdownFormatter().then();
  await autoCommitUpdatedLatexFiles().then();
  await autoCommitUpdatedGenealogy().then();
  await autoCommitUpdatedTagsTools().then();
  await autoCommitNewMarkdownTags().then();
  await autoCommitUpdatedMarkdownTags().then();
  await autoCommitNewGitHelpers().then();
  await autoCommitUpdatedGitHelpers().then();
  await autoCommitUpdatedMarkdownTagsHelpers().then();
}

autoCommit().then();
