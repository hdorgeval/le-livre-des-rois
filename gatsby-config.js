/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mardown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'graphs',
        path: `${__dirname}/src/graphs`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'tags',
        path: `${__dirname}/src/tags`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-162171486-1',
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
  siteMetadata: {
    title: 'Le Livre des Rois',
  },
};
