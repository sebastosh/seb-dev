const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDevArticles {
        edges {
          node {
            article {
              title
              created_at
              body_html
              slug
              id
              readable_publish_date
            }
          }
        }
      }
    }
  `)

  result.data.allDevArticles.edges.forEach(({ node }) => {
    createPage({
      path: node.article.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.article.slug,
      },
    })
  })
}