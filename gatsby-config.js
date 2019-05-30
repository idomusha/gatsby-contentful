/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `idomusha`,
    siteUrl: `https://www.soot.black`,
    description: `front-end developer`,
    author: `idomusha`,
    email: `idomusha@soot.black`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`
  ],
}
