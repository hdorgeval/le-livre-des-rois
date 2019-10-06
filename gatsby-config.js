/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-148920239-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /graphs/,
        },
      },
    },
  ],
  siteMetadata: {
    title: 'Le Livre des Rois',
  },
};
