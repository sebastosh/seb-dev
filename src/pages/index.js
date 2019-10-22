import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import projects from "../../data/projectData"
import ProjectListing from "../components/ProjectListing"
import SEO from "../components/SEO"
import config from "../../data/SiteConfig"

export default ({ data }) => {

  return (
    <Layout>
      <Helmet
        title={`${config.siteTitle} – Web Developer & Cultural Producer`}
      />
      <SEO />
      <div className="container">
        <div className="elevator">
          <h1>I'm {config.userName}, {config.siteDescription}</h1>
        </div>

        <section className="section">
          <h2>Projects</h2>
          <ProjectListing projects={projects} />
        </section>

       
      </div>
    </Layout>
  )
}


