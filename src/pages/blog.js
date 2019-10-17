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
          Blog
        </h1>

        {data.allDevArticles.edges.map(({ node }) => (
          <div key={node.article.id}>
            <Link
              to={node.article.slug}
              
            >
              <img src={node.article.social_image} alt="" />
              <h3
              >
                {node.article.title}
                <span
                  
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