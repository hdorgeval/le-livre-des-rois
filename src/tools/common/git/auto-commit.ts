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
  autoCommitUpdatedFrenchStats,
  autoCommitNewFrenchEpisodes,
  autoCommitUpdatedFrenchEpisodes,
  autoCommitUpdatedLaunchJson,
  autoCommitNewEnglishWarnerEpisodes,
  autoCommitUpdatedEnglishWarnerEpisodes,
} from '.';

async function autoCommit() {
  // english - warner - version
  await autoCommitNewEnglishWarnerEpisodes().then();
  await autoCommitUpdatedEnglishWarnerEpisodes().then();
  // french - mohl - version
  await autoCommitNewFrenchEpisodes().then();
  await autoCommitUpdatedFrenchEpisodes().then();
  await autoCommitUpdatedFrenchMarkdownFormatter().then();
  await autoCommitUpdatedFrenchGenealogy().then();
  await autoCommitUpdatedFrenchTagsTools().then();
  await autoCommitNewFrenchMarkdownTags().then();
  await autoCommitUpdatedFrenchMarkdownTags().then();
  await autoCommitUpdatedFrenchMarkdownTagsHelpers().then();
  await autoCommitNewFrenchLtexHelpers().then();
  await autoCommitUpdatedFrenchLtexHelpers().then();
  await autoCommitNewFrenchFrontmatterHelpers().then();
  await autoCommitUpdatedFrenchFrontmatterHelpers().then();
  await autoCommitUpdatedFrenchStats().then();
  // ltex files
  await autoCommitUpdatedLatexFiles().then();
  await autoCommitAddedLatexDictionaryFiles().then();
  await autoCommitAddedLatexFalsePositivesFiles().then();
  // Git helpers
  await autoCommitNewGitHelpers().then();
  await autoCommitUpdatedGitHelpers().then();
  // Geo data
  await autoCommitNewGeoData().then();
  await autoCommitUpdatedGeoData().then();
  await autoCommitNewGeoDataHelpers().then();
  await autoCommitUpdatedGeoDataHelpers().then();
  // vscode
  await autoCommitUpdatedLaunchJson().then();
}

autoCommit().then();
