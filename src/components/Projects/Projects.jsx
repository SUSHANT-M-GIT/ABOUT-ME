import React, { useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { projects } from '../../data/portfolio'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'
import './Projects.css'

const filters = ['ALL', 'FULL-STACK', 'DATA', 'MACHINE LEARNING']

export default function Projects() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category.includes(activeFilter))

  return (
    <section
      className={`projects section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
      aria-labelledby="projects-heading"
    >
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">03 · PROJECTS</span>
        <span className="section-label-line" />
      </div>

      <div className="projects-inner">
        <div className="projects-header">
          <h2 className="section-heading" id="projects-heading">WHAT I BUILD</h2>
          <p className="projects-subtitle">
            Real applications. Real problems. Real solutions.
          </p>
        </div>

        {/* Filters */}
        <div className="projects-filters" role="group" aria-label="Filter projects">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'filter-active' : ''}`}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
