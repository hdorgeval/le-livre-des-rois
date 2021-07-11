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
  autoCommitNewGeoData,
  autoCommitUpdatedGeoData,
  autoCommitNewGeoDataHelpers,
  autoCommitUpdatedGeoDataHelpers,
  autoCommitNewLtexHelpers,
  autoCommitUpdatedLtexHelpers,
  autoCommitNewFrontmatterHelpers,
  autoCommitUpdatedFrontmatterHelpers,
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
  await autoCommitNewGeoData().then();
  await autoCommitUpdatedGeoData().then();
  await autoCommitNewGeoDataHelpers().then();
  await autoCommitUpdatedGeoDataHelpers().then();
  await autoCommitNewLtexHelpers().then();
  await autoCommitUpdatedLtexHelpers().then();
  await autoCommitNewFrontmatterHelpers().then();
  await autoCommitUpdatedFrontmatterHelpers().then();
}

autoCommit().then();
