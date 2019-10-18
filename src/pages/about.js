import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import config from "../../data/SiteConfig"
import fileicon from "../images/file.svg"
import resume from "../images/SebastienSanzdeSantamariaResume2019.pdf"

export default ({ data }) => (
  <Layout>
    <div className="container">
      <h1>About {config.userName}</h1>
      <p>{config.about}</p>

   
        <div id="skills">
            <h1>Skills</h1>
            
        
                {config.skills.map(tag => (
                  <div className="skill">{tag}</div>
                ))}
          
            </div>
     

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
