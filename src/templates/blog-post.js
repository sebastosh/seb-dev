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

      <h1>{post.title}</h1>

   
      <div className="blog-tags"><span className="strong" >Date:</span> {post.readable_publish_date}</div>
      <div className="blog-meta strong">Tags:</div>
      {post.tags.map(tag => (
        <div className="blog-tags">{tag}</div>
      ))}

      <section className="section">
        
        <img className="blog-image" src={post.social_image} alt="" />

        <div className="dev-post" dangerouslySetInnerHTML={{ __html: post.body_html }} />
        </section>
        <div>Source Dev.to URL: <a href={post.url} >{post.url}</a></div>
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
        url
      }
    }
  }
`
