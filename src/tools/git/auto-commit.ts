import {
  autoCommitNewGitHelpers,
  autoCommitNewMarkdownTags,
  autoCommitUpdatedGenealogy,
  autoCommitUpdatedGitHelpers,
  autoCommitUpdatedLatexFiles,
  autoCommitUpdatedMarkdownFormatter,
  autoCommitUpdatedTagsTools,
} from '.';

autoCommitUpdatedMarkdownFormatter().then();
autoCommitUpdatedLatexFiles().then();
autoCommitUpdatedGenealogy().then();
autoCommitUpdatedTagsTools().then();
autoCommitNewMarkdownTags().then();
autoCommitNewGitHelpers().then();
autoCommitUpdatedGitHelpers().then();
