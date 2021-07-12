import {
  autoCommitAddedLatexDictionaryFiles,
  autoCommitAddedLatexFalsePositivesFiles,
  autoCommitNewFrenchFrontmatterHelpers,
  autoCommitNewFrenchLtexHelpers,
  autoCommitNewGeoData,
  autoCommitNewGeoDataHelpers,
  autoCommitNewGitHelpers,
  autoCommitNewFrenchMarkdownTags,
  autoCommitUpdatedFrenchFrontmatterHelpers,
  autoCommitUpdatedFrenchLtexHelpers,
  autoCommitUpdatedFrenchMarkdownTagsHelpers,
  autoCommitUpdatedFrenchGenealogy,
  autoCommitUpdatedGeoData,
  autoCommitUpdatedGeoDataHelpers,
  autoCommitUpdatedGitHelpers,
  autoCommitUpdatedLatexFiles,
  autoCommitUpdatedFrenchMarkdownFormatter,
  autoCommitUpdatedFrenchMarkdownTags,
  autoCommitUpdatedFrenchTagsTools,
} from '.';

async function autoCommit() {
  await autoCommitUpdatedFrenchMarkdownFormatter().then();
  await autoCommitUpdatedLatexFiles().then();
  await autoCommitAddedLatexDictionaryFiles().then();
  await autoCommitAddedLatexFalsePositivesFiles().then();
  await autoCommitUpdatedFrenchGenealogy().then();
  await autoCommitUpdatedFrenchTagsTools().then();
  await autoCommitNewFrenchMarkdownTags().then();
  await autoCommitUpdatedFrenchMarkdownTags().then();
  await autoCommitNewGitHelpers().then();
  await autoCommitUpdatedGitHelpers().then();
  await autoCommitUpdatedFrenchMarkdownTagsHelpers().then();
  await autoCommitNewGeoData().then();
  await autoCommitUpdatedGeoData().then();
  await autoCommitNewGeoDataHelpers().then();
  await autoCommitUpdatedGeoDataHelpers().then();
  await autoCommitNewFrenchLtexHelpers().then();
  await autoCommitUpdatedFrenchLtexHelpers().then();
  await autoCommitNewFrenchFrontmatterHelpers().then();
  await autoCommitUpdatedFrenchFrontmatterHelpers().then();
}

autoCommit().then();
