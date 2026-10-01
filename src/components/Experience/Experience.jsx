import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { experience } from '../../data/portfolio'
import './Experience.css'

export default function Experience() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { threshold: 0.12 })

  return (
    <section
      className={`experience section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">03 · EXPERIENCE</span>
        <span className="section-label-line" />
      </div>

      <div className="experience-inner">
        <h2 className="section-heading" id="experience-heading">EXPERIENCE</h2>

        <div className="experience-list" role="list">
          {experience.map((job) => (
            <ExperienceCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ job }) {
  return (
    <article className="exp-card glass-card" role="listitem">
      <div className="exp-header">
        <div className="exp-header-left">
          <div className="exp-role-row">
            <h3 className="exp-role">{job.role}</h3>
            <span className="exp-type-badge">{job.type}</span>
          </div>
          <p className="exp-company">
            {job.company}
            {job.location && (
              <span className="exp-location"> · {job.location}</span>
            )}
          </p>
        </div>
        <p className="exp-period">{job.period}</p>
      </div>
      <ul className="exp-bullets" aria-label={`Responsibilities at ${job.company}`}>
        {job.bullets.map((bullet, i) => (
          <li key={i} className="exp-bullet">
            <span className="exp-bullet-dot" aria-hidden="true" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="exp-tech" aria-label="Technologies used">
        {job.tech.map((t) => (
          <span key={t} className="exp-tech-badge">{t}</span>
        ))}
      </div>
      {(job.live || job.projectLink) && (
        <div className="exp-links">
          {job.live && (
            <a
              href={job.live}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-link exp-link-live"
              aria-label="View live project"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      )}
    </article>
  )
}
