import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import config from '../../data/SiteConfig'


export default ({ data }) => (
  <Layout>
    <div className="container">
    <h1>About {config.userName}</h1>
    <p>
      {config.about}
    </p>
    </div>
  </Layout>
)

export const query = graphql `
query {
    site {
        siteMetadata {
            title
        }
    }
}`