import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
console.log("TCL: data", data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Blog
        </h1>

        {data.allDevArticles.edges.map(({ node }) => (
          <div key={node.article.id}>
            <Link
              to={node.article.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <img src={node.article.social_image} alt="" />
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.article.title}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.article.readable_publish_date}
                </span>
              </h3>
              <div>{node.body_html}</div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allDevArticles {
    edges {
      node {
        article {
          title
          readable_publish_date
          social_image
          slug
          id
        }
      }
    }
  }
  }
`