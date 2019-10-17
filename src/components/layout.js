import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
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
    <div>
      <div className="site-header">
        <Link to={`/`}>
          <div className="site-title">{data.site.siteMetadata.title}</div>
        </Link>
        <div className="site-nav">
          <Link className="site-nav-item" to={`/projects/`}>
            Projects
          </Link>

          <Link className="site-nav-item" to={`/blog/`}>
            Blog
          </Link>

          <Link className="site-nav-item" to={`/contact/`}>
            Contact
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}
