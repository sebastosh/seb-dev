import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import devto from "../images/dev-dot-to-small-color.png"


export default ({ data }) => {
  console.log("TCL: data", data)
  return (
    <Layout>
      <div className="container">
        <div className="elevator">
          <h1>Writings about tech on <img
              src={devto}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-title-dev"
              alt="Dev.to"
            /></h1>
        </div>
        <section className="section">
        {data.allDevArticles.edges.map(({ node }) => (
          <div key={node.article.id}>
            <Link to={node.article.slug}>
              <div className="blog-index-title">
                {node.article.title}
                <span> — {node.article.readable_publish_date}</span>
              </div>
              <div className="dev-post"><img  src={node.article.social_image} alt={node.article.title} /></div>
              
            </Link>
          </div>
        ))}
        </section>

        
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
