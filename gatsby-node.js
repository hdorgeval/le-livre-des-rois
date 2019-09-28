// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require('gatsby-source-filesystem');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.onCreateNode = async ({ node, getNode, actions }) => {
  // eslint-disable-next-line no-console
  console.log(`onCreateNode > ${node.internal.type}`);
  if (node.internal.type === 'MarkdownRemark') {
    // eslint-disable-next-line no-console
    console.log(`onCreateNode > MarkdownRemark`);
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'markdown',
    });
    // eslint-disable-next-line no-console
    console.log(`onCreateNode > slug = '${slug}'`);
    const { createNodeField } = actions;
    await createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    return graphql(`
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
    `)
      .then((result) => {
        return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/markdown-template/markdown-template.tsx'),
            context: {
              slug: node.fields.slug,
            },
          });
        });
      })
      .then(resolve);
  });
};
