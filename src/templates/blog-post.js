import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
console.log("TCL: blog post data", data)

 const post = data.devArticles.article
 console.log('post: ', post);
  return (
    <Layout>
      <div>
      <img src={post.social_image} alt="" />
        <h1>{post.title}</h1>
        <h2>{post.readable_publish_date}</h2>
        {post.tags.map(( tag => (
          <div>
    
              <h3>
 
                {tag}

              </h3>
              
         
          </div>
        )))}
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
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