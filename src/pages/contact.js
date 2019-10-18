import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import config from "../../data/SiteConfig"





export default ({ data }) => {
  console.log('contatconfig: ', config);
  return (
    <Layout>
      <div className="container">
        
        <div className="elevator">
          <h1>Get in touch</h1>
        </div>

        <section className="section">
      

        </section>
        </div>
    </Layout>
  )
}