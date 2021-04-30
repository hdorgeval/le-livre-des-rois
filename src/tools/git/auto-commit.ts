import {
  autoCommitNewGitHelpers,
  autoCommitNewMarkdownTags,
  autoCommitUpdatedGenealogy,
  autoCommitUpdatedGitHelpers,
  autoCommitUpdatedLatexFiles,
  autoCommitUpdatedMarkdownFormatter,
  autoCommitUpdatedTagsTools,
} from '.';

autoCommitUpdatedGitHelpers().then();
autoCommitNewGitHelpers().then();
autoCommitUpdatedMarkdownFormatter().then();
autoCommitUpdatedLatexFiles().then();
autoCommitUpdatedGenealogy().then();
autoCommitUpdatedTagsTools().then();
autoCommitNewMarkdownTags().then();
