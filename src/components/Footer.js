import React, { Component } from 'react'
import { Link } from 'gatsby'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import devto from '../images/dev-dot-to.svg'
import github from '../images/github.svg'

export default class Footer extends Component {

  render() {
    return (
      <footer className="footer container">
        <div>
          {/* <a href="https://ko-fi.com/taniarascia" target="_blank" rel="noopener noreferrer">
            Ko-Fi
          </a> 
          <a href="https://patreon.com/taniarascia" target="_blank" rel="noopener noreferrer">
            Patreon
          </a>*/}
          <Link to="/contact">Contact</Link>
          {/* <a href="https://sebastiensanzdesantamaria.net/rss.xml" target="_blank" rel="noopener noreferrer">
            RSS
          </a> */}
        </div>
        <div>
          <a href="https://github.com/sebastosh" title="Seb on GitHub">
            <img
              src={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/sebastiensanzdesantamaria/" title="Seb on Linkedin">
            <img
              src={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Linkedin"
            />
          </a>
          <a href="https://dev.to/sebsanzdesant" title="Seb on Dev.to">
            <img
              src={devto}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Dev.to"
            />
          </a>
          <a href="https://twitter.com/sebsanzdesant" title="Seb on Twitter">
            <img
              src={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="Twitter"
            />
          </a>
          
          {/* <a href="https://www.netlify.com/" title="Hosted by Netlify">
            <img
              src={netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a>
          <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
            <img
              src={gatsby}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />
          </a> */}
        </div>
      </footer>
    )
  }
}
