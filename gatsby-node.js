// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require('gatsby-source-filesystem');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // eslint-disable-next-line no-console
  console.log(`onCreateNode > ${node.internal.type}`);
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'markdown',
    });
    // eslint-disable-next-line no-console
    console.log(`onCreateNode > slug = '${slug}'`);
    await createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

async function createAllPAgesForMarkdownFiles(graphql, actions) {
  const { createPage } = actions;
  const tagTemplate = path.resolve('src/templates/markdown-template/markdown-template.tsx');
  const { data } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const markdowns = data.allMarkdownRemark.edges.map((edge) => edge.node);
  markdowns.forEach((markdown) => {
    // eslint-disable-next-line no-console
    console.log(`Creating page for markdown ${markdown.fields.slug}`);
    createPage({
      path: markdown.fields.slug,
      component: path.resolve(tagTemplate),
      context: {
        slug: markdown.fields.slug,
      },
    });
  });
}

async function createAllPagesForTags(graphql, actions) {
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
    // eslint-disable-next-line no-console
    console.log(`Creating page for tag ${tag.fieldValue}`);
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
  await createAllPAgesForMarkdownFiles(graphql, actions);
  await createAllPagesForTags(graphql, actions);
};

exports.onPostBootstrap = () => {
  // eslint-disable-next-line no-console
  console.log('onPostBootstrap');
};
