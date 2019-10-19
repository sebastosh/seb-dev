import React, { Component } from 'react'
import GitHubButton from 'react-github-btn'

export default class ProjectListing extends Component {
  render() {
    const { projects } = this.props

    return (
      <section className="projects">

        {projects.map(project => (

        <div className="each-project" key={project.title} >

<a
                className="project-link"
                href={project.source}
                target="_blank"
                rel="noopener noreferrer">
              <img className="image" src={project.image} alt={project.title} /></a>

            <div className="each" key={project.title} >
            
              <a
                className="project-link"
                href={project.source}
                target="_blank"
                rel="noopener noreferrer">
              
                <h2 className="project-title">{project.title}</h2>
              </a>

            
              <p>{project.description}</p>
            
            
                          
              <div className="tags-container">
              
              { project.tags.map(tag => (
                   
                      <div className="tags" key={tag} >{tag}</div>
                   
                ))}

              </div>
              <div className="buttons">
                <GitHubButton href={project.source} data-size="large" >
                  Source
                </GitHubButton>
                {project.path && (
                  <a className="button" href={project.path} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                )}
              </div>
              

          </div>
        </div>
        ))}

      </section>
    )
  }
}
