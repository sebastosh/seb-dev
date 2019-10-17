import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
console.log("TCL: data", data)
  return (
    <Layout>
      <div>
        <h1
        >
          Projects
        </h1>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >

<img src={`/${node.frontmatter.image}`} alt={node.frontmatter.title} />

              <h3>
                {node.frontmatter.title}{" "}
                <span >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
{
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM, YYYY")
            demo
            github
            image
            website
          }
          fields {
            slug
          }
          excerpt
          internal {
            content
          }
        }
      }
    }
  }
`