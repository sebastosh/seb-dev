import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log("TCL: data", data)
  return (
    <Layout>
      <div className="container">
        <div className="elevator">
          <h1>Blog Posts from Dev.to</h1>
        </div>
        <section className="section">
        {data.allDevArticles.edges.map(({ node }) => (
          <div key={node.article.id}>
            <Link to={node.article.slug}>
              <h3>
                {node.article.title}
                <span>— {node.article.readable_publish_date}</span>
              </h3>
              <div>{node.body_html}</div>
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
