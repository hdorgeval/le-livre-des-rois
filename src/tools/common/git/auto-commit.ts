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
  autoCommitUpdatedGitIgnore,
  autoCommitUpdatedExtensionJson,
  autoCommitUpdatedLtexDocumentation,
  autoCommitUpdatedEnglishNotebooks,
  autoCommitUpdatedEnglishWarnerMarkdownFormatter,
  autoCommitUpdatedCommonMarkdownFormatter,
  autoCommitUpdatedCommonToolsFs,
  autoCommitUpdatedCommonMarkdownFrontmatter,
  autoCommitUpdatedCommonMarkdownNaming,
  autoCommitUpdatedEnglishWarnerFrontmatterHelpers,
  autoCommitNewEnglishWarnerFrontmatterHelpers,
} from '.';

async function autoCommit() {
  // common fs tools
  await autoCommitUpdatedCommonToolsFs().then();
  // common markdown tools
  await autoCommitUpdatedCommonMarkdownFormatter().then();
  await autoCommitUpdatedCommonMarkdownFrontmatter().then();
  await autoCommitUpdatedCommonMarkdownNaming().then();
  // english - warner - version
  await autoCommitNewEnglishWarnerEpisodes().then();
  await autoCommitUpdatedEnglishWarnerEpisodes().then();
  await autoCommitUpdatedEnglishWarnerMarkdownFormatter().then();
  await autoCommitNewEnglishWarnerFrontmatterHelpers().then();
  await autoCommitUpdatedEnglishWarnerFrontmatterHelpers().then();
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
  await autoCommitUpdatedGitIgnore().then();
  // Geo data
  await autoCommitNewGeoData().then();
  await autoCommitUpdatedGeoData().then();
  await autoCommitNewGeoDataHelpers().then();
  await autoCommitUpdatedGeoDataHelpers().then();
  // vscode
  await autoCommitUpdatedLaunchJson().then();
  await autoCommitUpdatedExtensionJson().then();
  // documentation
  await autoCommitUpdatedLtexDocumentation().then();
  // jupiter notebooks
  await autoCommitUpdatedEnglishNotebooks().then();
}

autoCommit().then();
