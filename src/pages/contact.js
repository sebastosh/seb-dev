import React from "react"
import Layout from "../components/layout"
// import config from "../../data/SiteConfig"
import { TinyLetter, Email, Submit } from 'react-tinyletter';
import styled from 'styled-components'
import tinyletter from '../images/tinyletter.svg'

const StyledEmail = styled(Email)`
border: 1px solid #ccc;
font-size: 18px;
font-weight: 100;
width: 60%;
margin-right: .4em;
display: inline;
`

const StyledSubmit = styled(Submit)`
width: 35%;
&:active {
  background-color: deepskyblue;
  color: white;
}
`
export default ({ data }) => {


  return (
    <Layout>
      <div className="container">
        
        <div className="elevator">
          <h1>Get in touch</h1>
        </div>

        <section className="section">
<div>Email: <a href="mailto:seb[at]sebastiensanzdesantamaria[dot]net" title="Email">
            seb@sebastiensanzdesantamaria.net 
          </a></div>
<div>GitHub: <a href="https://github.com/sebastosh" title="Seb on GitHub">
            sebastosh
          </a></div>
<div>Twitter: <a href="https://twitter.com/sebsanzdesant" title="Seb on Twitter">
            sebsanzdesant
          </a></div>

<div>Linkedin <a href="https://www.linkedin.com/in/sebastiensanzdesantamaria/" title="Seb on Linkedin">
            sebastiensanzdesantamaria
          </a></div>          
  <div>Dev.to: <a href="https://dev.to/sebsanzdesant" title="Seb on Dev.to">
            sebsanzdesant
          </a></div>        
          


        </section>

        <section className="section">
        <h2>Stay in touch - <img
              src={tinyletter}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-img"
              alt="GitHub"
            />TinyLetter</h2>
        
        <div className="tiny">
        <TinyLetter list="sebastiensanzdesantamaria">
        <StyledEmail/>
  <StyledSubmit/>
  </TinyLetter>
        </div>


        </section>


        </div>
    </Layout>
  )
}