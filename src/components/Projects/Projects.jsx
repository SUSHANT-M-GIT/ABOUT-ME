import React, { useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { projects } from '../../data/portfolio'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'
import './Projects.css'

export default function Projects() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { threshold: 0.08 })
  const [selectedProject, setSelectedProject] = useState(null)

  const featured  = projects.filter(p => p.tier === 'featured')
  const selected  = projects.filter(p => p.tier === 'selected')
  const others    = projects.filter(p => p.tier === 'other')

  return (
    <section
      className={`projects section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
      aria-labelledby="projects-heading"
    >
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">04 · PROJECTS</span>
        <span className="section-label-line" />
      </div>

      <div className="projects-inner">
        <div className="projects-header">
          <h2 className="section-heading" id="projects-heading">PROJECTS</h2>
          <p className="projects-subtitle">Things I've designed, built and shipped.</p>
        </div>
        {featured.length > 0 && (
          <div className="projects-tier">
            <h3 className="tier-label">Featured Project</h3>
            <div className="projects-featured-grid">
              {featured.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  index={i}
                  variant="featured"
                  onClick={() => setSelectedProject(p)}
                />
              ))}
            </div>
          </div>
        )}
        {selected.length > 0 && (
          <div className="projects-tier">
            <h3 className="tier-label">Selected Projects</h3>
            <div className="projects-selected-grid">
              {selected.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  index={i}
                  variant="selected"
                  onClick={() => setSelectedProject(p)}
                />
              ))}
            </div>
          </div>
        )}
        {others.length > 0 && (
          <div className="projects-tier">
            <h3 className="tier-label">Other Projects</h3>
            <div className="projects-other-grid">
              {others.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  index={i}
                  variant="other"
                  onClick={() => setSelectedProject(p)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
