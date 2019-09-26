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
  ],
  siteMetadata: {
    title: 'Le Livre des Rois',
  },
};
