import React, { useRef, useEffect, useState } from 'react'
import './ProjectCard.css'

const TECH_COLORS = {
  'React':        '#61DAFB',
  'TypeScript':   '#3178C6',
  'Node.js':      '#339933',
  'Express.js':   '#888888',
  'MongoDB':      '#47A248',
  'Socket.IO':    '#6C63FF',
  'JWT':          '#d63aff',
  'REST APIs':    '#FF6B6B',
  'Vite':         '#646CFF',
  'Python':       '#3776AB',
  'Pandas':       '#150458',
  'Scikit-learn': '#F7931E',
  'Flask':        '#aaaaaa',
  'Power BI':     '#F2C811',
  'PostgreSQL':   '#336791',
  'DAX':          '#F2C811',
  'Three.js':     '#61DAFB',
  'Framer Motion':'#e040fb',
  'GSAP':         '#88CE02',
  'Vercel':       '#aaaaaa',
  'MongoDB Atlas':'#47A248',
}

export default function ProjectCard({ project, index, variant, onClick }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (variant === 'other') return
    const card = cardRef.current
    if (!card) return

    const move = (e) => {
      const r = card.getBoundingClientRect()
      const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2)
      const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2)
      setTilt({ x: dy * -4, y: dx * 4 })
    }
    const leave = () => setTilt({ x: 0, y: 0 })

    card.addEventListener('mousemove', move)
    card.addEventListener('mouseleave', leave)
    return () => {
      card.removeEventListener('mousemove', move)
      card.removeEventListener('mouseleave', leave)
    }
  }, [variant])

  const isFeatured = variant === 'featured'
  const isOther    = variant === 'other'
  const maxTech    = isFeatured ? 8 : isOther ? 4 : 6

  return (
    <article
      ref={cardRef}
      className={`project-card project-card--${variant}`}
      style={{
        '--delay':     `${index * 0.08}s`,
        '--accent':    project.color,
        '--tilt-x':    `${tilt.x}deg`,
        '--tilt-y':    `${tilt.y}deg`,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      aria-label={`View ${project.title} project details`}
    >
      <div className="card-inner">
        <div className="card-meta-row">
          {project.internship && (
            <span className="card-internship-badge">Internship Project</span>
          )}
          <div className="card-tags">
            {project.tags.slice(0, 2).map(t => (
              <span key={t} className="card-tag">{t}</span>
            ))}
          </div>
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-tagline">{project.tagline}</p>
        {isFeatured && project.features && (
          <ul className="card-highlights" aria-label="Key features">
            {project.features.slice(0, 4).map(f => (
              <li key={f} className="card-highlight-item">
                <span className="card-highlight-dot" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        )}
        <div className="card-tech" aria-label="Technologies used">
          {project.tech.slice(0, maxTech).map(t => (
            <span
              key={t}
              className="tech-badge"
              style={{ '--tech-color': TECH_COLORS[t] || '#888' }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > maxTech && (
            <span className="tech-badge tech-more">+{project.tech.length - maxTech}</span>
          )}
        </div>
        <div className="card-footer">
          <span className="card-cta" aria-hidden="true">
            {isFeatured ? 'View Case Study' : 'View Details'}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>

          <div className="card-links" onClick={e => e.stopPropagation()}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link-btn"
                aria-label={`${project.title} GitHub repository`}
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link-btn card-link-live"
                aria-label={`${project.title} live demo`}
              >
                Live ↗
              </a>
            )}
          </div>
        </div>

      </div>
    </article>
  )
}
