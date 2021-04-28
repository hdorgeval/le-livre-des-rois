import {
  autoCommitNewGitHelpers,
  autoCommitUpdatedGenealogy,
  autoCommitUpdatedGitHelpers,
  autoCommitUpdatedLatexFiles,
  autoCommitUpdatedMarkdownFormatter,
} from '.';

autoCommitUpdatedGitHelpers().then();
autoCommitNewGitHelpers().then();
autoCommitUpdatedMarkdownFormatter().then();
autoCommitUpdatedLatexFiles().then();
autoCommitUpdatedGenealogy().then();
