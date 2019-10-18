import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log("TCL: blog post data", data)

  const post = data.devArticles.article
  console.log("post: ", post)
  return (
    <Layout>
      <div className="container">
      <section className="section">
      <h1>{post.title}</h1>
        <h4>{post.readable_publish_date}</h4>
        <img className="blog-image" src={post.social_image} alt="" />

        {post.tags.map(tag => (
          <span classname="project-title">{tag}</span>
        ))}
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
        </section>
     
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String!) {
    devArticles(article: { slug: { eq: $slug } }) {
      article {
        social_image
        body_html
        title
        tags
        readable_publish_date
      }
    }
  }
`
