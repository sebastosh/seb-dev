import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log("index: data", data)
  return (
    <Layout>
      <div>
        <div>{data.site.siteMetadata.description}</div>
  
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
               <img src={`/${node.frontmatter.image}`} alt={node.frontmatter.title} />

              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
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
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
    allDevArticles {
      edges {
        node {
          article {
            title
            created_at
            body_markdown
          }
        }
      }
    }
  }
`
