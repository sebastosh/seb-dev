import React, { Component } from 'react'
import GitHubButton from 'react-github-btn'

export default class ProjectListing extends Component {
  render() {
    const { projects } = this.props

    return (
      <section className="projects">
        {projects.map(project => (
 
          <div className="each" key={project.title}>
           
              <a
                className="project-link"
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-icon">{project.icon}</div>
                <div className="project-title">{project.title}</div>
              </a>
            
            <p>{project.description}</p>
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
           { project.tags.map(tag => (
              
                <div className="project-tag">{tag}</div>
            ))}
          </div>
        ))}
      </section>
    )
  }
}