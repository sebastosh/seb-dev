/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Sebastien Sanz de Santamaria`,
    description: 'Full stack web developer focused on creative process, nurturing community, and mastering hard things. Seeking to work with diverse, multinational teams to deliver software & web applications.',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-dev",
      options: {
        // This is your username on Dev.to
        username: 'sebsanzdesant'
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: 'f574cb6741d29a68895a7dac70692401ef242c63',
      }
    }
  ],
}
