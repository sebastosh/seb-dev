import React, { Component } from 'react'
import Helmet from 'react-helmet'
import ThemeContext from '../context/ThemeContext'
import Navigation from './Navigation'
import Footer from './Footer'
import config from '../../data/SiteConfig'
import '../styles/main.scss'

export default class MainLayout extends Component {
  static contextType = ThemeContext

  render() {
    const { dark, notFound } = this.context
    const { children } = this.props
    
    let themeClass = ''
    
    if (dark && !notFound) {
      themeClass = 'dark'
    } else if (notFound) {
      themeClass = 'not-found'
    }


    return (
      <>
        <Helmet
          bodyAttributes={{
            class: `theme ${themeClass}`,
          }}
        >
           <meta name="title" content={config.siteTitle} />
          <meta name="description" content={config.siteDescription} />
        </Helmet>

        <Navigation menuLinks={config.menuLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </>
    )
  }
}


// import React from "react"
// import { Link } from "gatsby"
// import Helmet from 'react-helmet'
// import ThemeContext from '../context/ThemeContext'
// import "./layout.css"
// import config from '../../data/SiteConfig'
// import favicon from '../images/favicon.png'

// export default ({ children }) => {

//   return (
//     <div>

//           <Helmet
//           bodyAttributes={{
//             class: `theme ${themeClass}`,
//           }}
//         >
//           <meta name="description" content={config.siteDescription} />
//           <link rel="shortcut icon" type="image/png" href={favicon} />
//         </Helmet>


//       <div className="site-header">
//         <Link to={`/`}>
//           <div className="site-title">{config.siteTitle}</div>
//         </Link>
//         <div className="site-nav">
//         <Link className="site-nav-item" to={`/about/`}>
//             About
//           </Link>

//           <Link className="site-nav-item" to={`/projects/`}>
//             Projects
//           </Link>

//           <Link className="site-nav-item" to={`/blog/`}>
//             Blog
//           </Link>

//           <Link className="site-nav-item" to={`/contact/`}>
//             Contact
//           </Link>
//         </div>
//       </div>
//       <div>{config.siteDescription}</div>

//       {children}
//     </div>
//   )
// }
