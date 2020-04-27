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
   
          <Link to="/contact">Get in touch.</Link>
    
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
          
        </div>
      </footer>
    )
  }
}
