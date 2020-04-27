import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import config from "../../data/SiteConfig"
import fileicon from "../images/file.svg"
import resume from "../images/SebastienSanzdeSantamariaResume.pdf"

export default ({ data }) => (
  <Layout>
    <div className="container">
      <div className="elevator">
        <h1>About {config.userName}</h1>
      </div>

      <section className="section">
        <p>{config.about}</p>

       <div className="skills-resume">

       <div className="resume">
          <h1>Resume</h1>
          <a href={resume} title="Resume">
            <img
              src={fileicon}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Resume"
            />
          </a>
        </div>
       <div>
          <h1>Skills</h1>

          {config.techSkills.map(tag => (
            <div className="skill" key={tag}>
              {tag}
            </div>
          ))}
        </div>

       
       </div>

        <div className="credits">
          <h1>Hat Tip</h1>
          I built this portfolio using <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            title="Built with Gatsby"
          > Gatsby
          </a>
          , with generous usage of
          <a
            href="https://github.com/taniarascia/taniarascia.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Tania Rascia's Amazing blog template"
          >
            {" "}
            Tania Rascia's really great portfolio template
          </a>
          . Pushed to the world using{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Hosted by Netlify"
          >
            Netlify
          </a>
          .
        </div>
      </section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
