import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import "./layout.css"
export default ({ children }) => {
const data = useStaticQuery(
    graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `
)


    return (
        <div
          css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
          `}
        >
          <Link to={`/`}>
            <div
              css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
              `}
            >
              {data.site.siteMetadata.title}
            </div>
          </Link>
          <Link
            to={`/blog/`}
            css={css`
              float: right;
            `}
          >
            Blog
          </Link>
          <Link
            to={`/projects/`}
            css={css`
              float: right;
            `}
          >
            Projects
          </Link>
          <Link
            to={`/contact/`}
            css={css`
              float: right;
            `}
          >
            Contact
          </Link>
          {children}
        </div>
      )
}

