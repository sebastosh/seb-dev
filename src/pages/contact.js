import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import config from "../../data/SiteConfig"

import { TinyLetter } from 'react-tinyletter';




export default ({ data }) => {
  console.log('contatconfig: ', config);
  return (
    <Layout>
      <div className="container">
        
        <div className="elevator">
          <h1>Get in touch</h1>
        </div>

        <section className="section">
<div>Email: <a mailto="seb[at]sebastiensanzdesantamaria[dot]net" title="Email">
            seb[at]sebastiensanzdesantamaria[dot]net 
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
        <h2>Stay in touch (newsletter)</h2>
        
        <TinyLetter list="sebastiensanzdesantamaria"/>


        </section>


        </div>
    </Layout>
  )
}