// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require('gatsby-source-filesystem');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const debug = false;

async function createSlugFieldNodeOnMarkdownRemarkNode({ node, getNode, actions }) {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const { createNodeField } = actions;
  const slug = createFilePath({
    node,
    getNode,
    basePath: 'markdown',
  });
  if (debug) {
    // eslint-disable-next-line no-console
    console.log(`onCreateNode > slug = '${slug}'`);
  }
  await createNodeField({
    node,
    name: 'slug',
    value: slug,
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
};

async function createAllEpisodePages(graphql, actions) {
  const { createPage } = actions;
  const tagTemplate = path.resolve('src/templates/episode-template/episode-template.tsx');
  const { data } = await graphql(`
    {
      allMarkdownRemark(sort: { fields: fields___slug, order: ASC }, filter: {}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              image
              lastUpdate
              reign_slug
              reign
              title
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

    if (debug) {
      // eslint-disable-next-line no-console
      console.log(`Creating episode page for markdown ${markdown.fields.slug}`);
      // eslint-disable-next-line no-console
      console.log(`image: '${image}'`);
    }
    createPage({
      path: markdown.fields.slug,
      component: path.resolve(tagTemplate),
      context: {
        slug: markdown.fields.slug,
        previousSlug: markdown.previous?.fields?.slug,
        nextSlug: markdown.next?.fields?.slug,
        image,
        lastUpdate,
        reignTitle,
        reignSlug,
        pageTitle,
      },
    });
  });
}

async function createAllTagPages(graphql, actions) {
  const { createPage } = actions;
  const tagTemplate = path.resolve('src/templates/tag-template/tag-template.tsx');
  const { data } = await graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const tags = data.allMarkdownRemark.group;

  tags.forEach((tag) => {
    const path = `tag/${tag.fieldValue}`;
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
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createAllEpisodePages(graphql, actions);
  await createAllTagPages(graphql, actions);
};

exports.onPostBootstrap = () => {
  if (debug) {
    // eslint-disable-next-line no-console
    console.log('onPostBootstrap');
  }
};

// TODO: temporary workaround for https://github.com/gatsbyjs/gatsby/issues/31878
exports.onCreateWebpackConfig = ({ actions, plugins, stage, getConfig }) => {
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
};
