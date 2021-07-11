// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require('gatsby-source-filesystem');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const debug = false;

function extractLangFromNode(node) {
  return node?.frontmatter?.lang;
}

function addLangToSlug(lang, slug) {
  if (!lang) {
    return slug;
  }

  if (slug.includes(`/${lang}/`)) {
    return slug;
  }

  return `/${lang}${slug}`;
}

async function createSlugFieldNodeOnMarkdownRemarkNode({ node, getNode, actions }) {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }
  const lang = extractLangFromNode(node);

  const { createNodeField } = actions;
  const slug = createFilePath({
    node,
    getNode,
    basePath: 'markdown',
  });
  const i18nSlug = addLangToSlug(lang, slug);
  if (debug) {
    // eslint-disable-next-line no-console
    console.log(`onCreateNode > slug = '${i18nSlug}'`);
  }
  await createNodeField({
    node,
    name: 'slug',
    value: i18nSlug,
  });
}

async function createSvgContentFieldOnFileNode({ node, actions, loadNodeContent }) {
  if (node.internal.type !== 'File') {
    return;
  }

  if (node.internal.mediaType !== 'image/svg+xml') {
    return;
  }

  if (debug) {
    // eslint-disable-next-line no-console
    console.log(`onCreateNode > ${node.internal.mediaType}`);
  }

  const { createNodeField } = actions;
  const content = `${await loadNodeContent(node)}`
    .replace(/<style>.*<\/style>/g, '')
    .replace(/<style>.*<\/style>/g, '');

  await createNodeField({
    node,
    name: 'svgContent',
    value: content,
  });
}

async function createGeoJsonContentFieldOnFileNode({ node, actions, loadNodeContent }) {
  if (node.internal.type !== 'File') {
    return;
  }

  if (node.internal.mediaType !== 'application/geo+json') {
    return;
  }

  if (debug) {
    // eslint-disable-next-line no-console
    console.log(`onCreateNode > ${node.internal.mediaType}`);
  }

  const { createNodeField } = actions;
  const content = `${await loadNodeContent(node)}`;
  // check content is a valid JSON
  const geoData = JSON.parse(content);
  await createNodeField({
    node,
    name: 'geoData',
    value: JSON.stringify(geoData),
  });
}

exports.onCreateNode = async ({ node, getNode, actions, loadNodeContent }) => {
  if (debug) {
    // eslint-disable-next-line no-console
    console.log(`onCreateNode > ${node.internal.type}`);
  }
  await createSlugFieldNodeOnMarkdownRemarkNode({
    node,
    getNode,
    actions,
  });
  await createSvgContentFieldOnFileNode({
    node,
    actions,
    loadNodeContent,
  });
  await createGeoJsonContentFieldOnFileNode({
    node,
    actions,
    loadNodeContent,
  });
};

async function createAllFrenchEpisodePages(graphql, actions) {
  const { createPage, createRedirect } = actions;
  const episodeTemplate = path.resolve('src/templates/fr/episode-template/episode-template.tsx');
  const { data } = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { lang: { eq: "fr" } }
          fileAbsolutePath: { glob: "**/markdown/fr/**/*.md" }
        }
        sort: { fields: fields___slug, order: ASC }
      ) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              image
              lastUpdate
              reign_slug
              reign
              title
              status
            }
          }
          next {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const markdowns = data.allMarkdownRemark.edges.map((nodeWrapper) => {
    const node = nodeWrapper.node;
    node.previous = nodeWrapper.previous;
    node.next = nodeWrapper.next;
    return node;
  });
  markdowns.forEach((markdown) => {
    const image = markdown?.frontmatter?.image || 'default-for-episode.jpeg';
    const reignTitle = markdown?.frontmatter?.reign;
    const reignSlug = markdown?.frontmatter?.reign_slug;
    const lastUpdate = markdown?.frontmatter?.lastUpdate;
    const pageTitle = markdown?.frontmatter?.title;
    const status = markdown?.frontmatter?.status;
    const path = markdown?.fileAbsolutePath;
    let githubPageUrl = null;
    const paths = path.split('/src/');
    if (Array.isArray(paths) && paths.length > 1) {
      const relativePath = paths[1];
      githubPageUrl = `https://github.com/hdorgeval/le-livre-des-rois/edit/master/src/${relativePath}`;
    }

    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`Creating episode page for markdown ${markdown.fields.slug}`);
      // eslint-disable-next-line no-console
      console.log(`image: '${image}'`);
    }
    createPage({
      path: markdown.fields.slug,
      component: episodeTemplate,
      context: {
        slug: markdown.fields.slug,
        previousSlug: markdown.previous?.fields?.slug,
        nextSlug: markdown.next?.fields?.slug,
        image,
        lastUpdate,
        reignTitle,
        reignSlug,
        pageTitle,
        status,
        githubPageUrl,
      },
    });

    if (markdown.fields.slug.includes('/fr/')) {
      const fromPath = markdown.fields.slug.replace('/fr/', '/');
      const toPath = markdown.fields.slug;
      createRedirect({
        fromPath,
        toPath,
        isPermanent: true,
        redirectInBrowser: true,
      });
      createRedirect({
        fromPath: `${fromPath}/`,
        toPath,
        isPermanent: true,
        redirectInBrowser: true,
      });
    }
  });
}

async function createAllFrenchTagPages(graphql, actions) {
  const { createPage, createRedirect } = actions;
  const tagTemplate = path.resolve('src/templates/fr/tag-template/tag-template.tsx');
  const { data } = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { lang: { eq: "fr" } } }) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  const tags = data.allMarkdownRemark.group;

  tags.forEach((tag) => {
    const oldPath = `tag/${tag.fieldValue}`;
    const path = `fr/tag/${tag.fieldValue}`;
    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`Creating page for tag ${tag.fieldValue}`);
    }
    createPage({
      path: path,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
    createRedirect({
      fromPath: `/${oldPath}`,
      toPath: `/${path}`,
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: `/${oldPath}/`,
      toPath: `/${path}`,
      isPermanent: true,
      redirectInBrowser: true,
    });
  });
}

/**
 * Temporary hack that will enable pages already indexed by Google
 * to automatically be redirected with the localized path
 *
 * @param {*} actions
 */
async function createAllRedirectsForFrenchPages(actions) {
  const { createRedirect } = actions;
  const pages = [
    'about',
    'tags',
    'genealogies',
    'regne-d-ardeschir-le-bon',
    'regne-d-ormuzd-fils-de-nersi',
    'regne-d-ormuzd',
    'regne-de-ardeschir-babekan',
    'regne-de-ardeschir-fils-de-schiroui',
    'regne-de-azermidokht',
    'regne-de-bahman',
    'regne-de-bahram-bahramian',
    'regne-de-bahram-fils-d-ormuzd',
    'regne-de-bahram-fils-de-bahram',
    'regne-de-bahram-fils-de-schapour',
    'regne-de-bahram-gour',
    'regne-de-balasch',
    'regne-de-dara',
    'regne-de-darab',
    'regne-de-djemschid',
    'regne-de-farrukhzad',
    'regne-de-feridoun',
    'regne-de-guerschasp',
    'regne-de-guraz',
    'regne-de-guschtasp',
    'regne-de-homai',
    'regne-de-hormuz',
    'regne-de-hormuzd',
    'regne-de-houscheng',
    'regne-de-iskender',
    'regne-de-kaioumors',
    'regne-de-kaous',
    'regne-de-khosrou-parviz',
    'regne-de-khosrou',
    'regne-de-kobad-fils-de-parviz',
    'regne-de-kobad-fils-de-pirouz',
    'regne-de-kobad',
    'regne-de-lohrasp',
    'regne-de-minoutchehr',
    'regne-de-nersi',
    'regne-de-newder',
    'regne-de-nouschirwan',
    'regne-de-pirouz',
    'regne-de-pourandokht',
    'regne-de-schapour-dhoul-aktaf',
    'regne-de-schapour-fils-de-schapour',
    'regne-de-schapour',
    'regne-de-thahmouras',
    'regne-de-yezdegird',
    'regne-de-yezdeguerd-fils-de-bahram',
    'regne-de-yezdeguerd',
    'regne-de-zew',
    'regne-de-zohak',
    'regne-des-aschkanides',
  ];

  pages.forEach((page) => {
    const fromPath = `/${page}`;
    const toPath = `/fr/${page}`;
    createRedirect({
      fromPath,
      toPath,
      isPermanent: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: `${fromPath}/`,
      toPath,
      isPermanent: true,
      redirectInBrowser: true,
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createAllFrenchEpisodePages(graphql, actions);
  await createAllFrenchTagPages(graphql, actions);
  await createAllRedirectsForFrenchPages(actions);
};

exports.onPostBootstrap = () => {
  if (debug) {
    // eslint-disable-next-line no-console
    console.log('onPostBootstrap');
  }
};

// TODO: temporary workaround for https://github.com/gatsbyjs/gatsby/issues/31878
exports.onCreateWebpackConfig = ({ actions, plugins, stage, getConfig, loaders }) => {
  // override config only during production JS & CSS build
  if (stage === 'build-javascript') {
    // get current webpack config
    const config = getConfig();

    const options = {
      minimizerOptions: {
        preset: [
          `default`,
          {
            svgo: {
              full: true,
              plugins: [
                // potentially destructive plugins removed - see https://github.com/gatsbyjs/gatsby/issues/15629
                // use correct config format and remove plugins requiring specific params - see https://github.com/gatsbyjs/gatsby/issues/31619
                `removeUselessDefs`,
                `cleanupAttrs`,
                `cleanupEnableBackground`,
                `cleanupIDs`,
                `cleanupListOfValues`,
                `cleanupNumericValues`,
                `collapseGroups`,
                `convertColors`,
                `convertPathData`,
                `convertStyleToAttrs`,
                `convertTransform`,
                `inlineStyles`,
                `mergePaths`,
                `minifyStyles`,
                `moveElemsAttrsToGroup`,
                `moveGroupAttrsToElems`,
                `prefixIds`,
                `removeAttrs`,
                `removeComments`,
                `removeDesc`,
                `removeDimensions`,
                `removeDoctype`,
                `removeEditorsNSData`,
                `removeEmptyAttrs`,
                `removeEmptyContainers`,
                `removeEmptyText`,
                `removeHiddenElems`,
                `removeMetadata`,
                `removeNonInheritableGroupAttrs`,
                `removeOffCanvasPaths`,
                `removeRasterImages`,
                `removeScriptElement`,
                `removeStyleElement`,
                `removeTitle`,
                `removeUnknownsAndDefaults`,
                `removeUnusedNS`,
                `removeUselessStrokeAndFill`,
                `removeXMLProcInst`,
                `reusePaths`,
                `sortAttrs`,
              ],
            },
          },
        ],
      },
    };
    // find CSS minimizer
    const minifyCssIndex = config.optimization.minimizer.findIndex(
      (minimizer) => minimizer.constructor.name === 'CssMinimizerPlugin',
    );
    // if found, overwrite existing CSS minimizer with the new one
    if (minifyCssIndex > -1) {
      config.optimization.minimizer[minifyCssIndex] = plugins.minifyCss(options);
    }
    // replace webpack config with the modified object
    actions.replaceWebpackConfig(config);
  }

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leaflet-src/,
            use: loaders.null(),
          },
          {
            test: /leaflet-draw/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
