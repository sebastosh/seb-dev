import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import projects from "../../data/projectData"
import ProjectListing from "../components/ProjectListing"
import SEO from "../components/SEO"
import config from "../../data/SiteConfig"

export default ({ data }) => {
  console.log("index: data", data)
  return (
    <Layout>
      <Helmet
        title={`${config.siteTitle} – Web Developer & Cultural Producer`}
      />
      <SEO />
      <div className="container">
        <div className="elevator">
          <h1>I'm {config.userName}</h1>
          <p>{config.siteDescription}</p>
        </div>

        <section className="section">
          <h2>Projects</h2>
          <ProjectListing projects={projects} />
        </section>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <img
                src={`/${node.frontmatter.image}`}
                alt={node.frontmatter.title}
              />

              <h3>
                {node.frontmatter.title}
                <span>— {node.frontmatter.date}</span>
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
