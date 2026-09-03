import React, { useRef, useEffect, useState } from 'react'
import './ProjectCard.css'

export default function ProjectCard({ project, index, onClick }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)

      setTilt({ x: dy * -8, y: dx * 8 })
      setGlowPos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }

    const handleLeave = () => {
      setTilt({ x: 0, y: 0 })
      setGlowPos({ x: 50, y: 50 })
    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  const techColorMap = {
    'React': '#61DAFB',
    'TypeScript': '#3178C6',
    'Node.js': '#339933',
    'Express.js': '#888',
    'MongoDB': '#47A248',
    'Socket.IO': '#010101',
    'JWT': '#d63aff',
    'REST APIs': '#FF6B6B',
    'Vite': '#646CFF',
    'Python': '#3776AB',
    'Machine Learning': '#FF6B6B',
    'Pandas': '#150458',
    'Scikit-learn': '#F7931E',
    'Flask': '#fff',
    'Data Processing': '#00D9FF',
    'Power BI': '#F2C811',
    'PostgreSQL': '#336791',
    'DAX': '#F2C811',
    'Power Query': '#F2C811',
  }

  return (
    <article
      ref={cardRef}
      className={`project-card ${project.featured ? 'project-card-featured' : ''}`}
      style={{
        '--delay': `${index * 0.1}s`,
        '--accent': project.color,
        '--tilt-x': `${tilt.x}deg`,
        '--tilt-y': `${tilt.y}deg`,
        '--glow-x': `${glowPos.x}%`,
        '--glow-y': `${glowPos.y}%`,
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View ${project.title} project details`}
    >
      {/* Tilt wrapper */}
      <div className="card-tilt-inner">
        {/* Dynamic glow on hover */}
        <div className="card-glow" />

        {/* Featured badge */}
        {project.featured && (
          <div className="card-featured-badge">
            <span className="badge-dot" />
            FEATURED
          </div>
        )}

        {/* Card header */}
        <div className="card-header">
          {/* Project number */}
          <span className="card-number">
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Tags */}
          <div className="card-tags">
            {project.tags.map(tag => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Project visual */}
        <div className="card-visual">
          <ProjectVisual project={project} />
        </div>

        {/* Project info */}
        <div className="card-body">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-tagline">{project.tagline}</p>
        </div>

        {/* Tech stack */}
        <div className="card-tech">
          {project.tech.slice(0, 5).map(t => (
            <span
              key={t}
              className="tech-badge"
              style={{ '--tech-color': techColorMap[t] || '#888' }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="tech-badge tech-more">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* View button */}
        <div className="card-footer">
          <span className="card-cta">
            View Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div className="card-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="View on GitHub"
                className="card-link-btn"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="View live demo"
                className="card-link-btn card-link-live"
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

// Visual representation for each project type
function ProjectVisual({ project }) {
  if (project.id === 'campus-event-finder') {
    return (
      <div className="visual-mern">
        <div className="visual-screen">
          <div className="screen-topbar">
            <div className="screen-dots">
              <span /><span /><span />
            </div>
            <div className="screen-url">campus-event-finder</div>
          </div>
          <div className="screen-body">
            <div className="screen-row accent-purple">Event Discovery</div>
            <div className="screen-row accent-blue">QR Attendance</div>
            <div className="screen-row accent-red">Live Updates</div>
            <div className="screen-badge-row">
              <span className="v-badge">MongoDB</span>
              <span className="v-badge">Socket.IO</span>
              <span className="v-badge">React</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (project.id === 'taskflow') {
    return (
      <div className="visual-mern">
        <div className="visual-screen">
          <div className="screen-topbar">
            <div className="screen-dots">
              <span /><span /><span />
            </div>
            <div className="screen-url">taskflow · task manager</div>
          </div>
          <div className="screen-body">
            <div className="screen-row accent-blue">Add &amp; Edit Tasks</div>
            <div className="screen-row accent-purple">Filter &amp; Sort</div>
            <div className="screen-row accent-red">Track Priority</div>
            <div className="screen-badge-row">
              <span className="v-badge">React</span>
              <span className="v-badge">Node.js</span>
              <span className="v-badge">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (project.id === 'cricket-score-predictor') {
    return (
      <div className="visual-ml">
        {/* Score bar chart simulation */}
        <div className="ml-chart">
          {[65, 82, 74, 91, 78, 88, 72, 95].map((h, i) => (
            <div
              key={i}
              className="ml-bar"
              style={{
                '--h': `${h}%`,
                '--delay': `${i * 0.05}s`,
                '--col': i % 2 === 0 ? '#00D9FF' : 'rgba(0,217,255,0.3)'
              }}
            />
          ))}
        </div>
        <div className="ml-label">Score Prediction · T20</div>
        <div className="ml-accuracy">
          <span className="ml-acc-val">~85%</span>
          <span className="ml-acc-label">Accuracy</span>
        </div>
      </div>
    )
  }

  if (project.id === 'credit-card-dashboard') {
    return (
      <div className="visual-powerbi">
        <div className="pbi-header">
          <span className="pbi-title">Financial Dashboard</span>
          <span className="pbi-badge">Power BI</span>
        </div>
        <div className="pbi-grid">
          <div className="pbi-kpi">
            <span className="pbi-kpi-val">$24M</span>
            <span className="pbi-kpi-label">Revenue</span>
          </div>
          <div className="pbi-kpi">
            <span className="pbi-kpi-val">10K+</span>
            <span className="pbi-kpi-label">Customers</span>
          </div>
        </div>
        <div className="pbi-donut">
          <svg viewBox="0 0 80 80" className="donut-svg">
            <circle cx="40" cy="40" r="28" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12"/>
            <circle cx="40" cy="40" r="28" fill="none" stroke="#F2C811" strokeWidth="12" strokeDasharray="88 88" strokeLinecap="round" transform="rotate(-90 40 40)"/>
            <circle cx="40" cy="40" r="28" fill="none" stroke="#6C63FF" strokeWidth="12" strokeDasharray="44 132" strokeDashoffset="-88" strokeLinecap="round" transform="rotate(-90 40 40)"/>
            <circle cx="40" cy="40" r="28" fill="none" stroke="#00D9FF" strokeWidth="12" strokeDasharray="24 152" strokeDashoffset="-132" strokeLinecap="round" transform="rotate(-90 40 40)"/>
            <text x="40" y="44" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Spend</text>
          </svg>
        </div>
      </div>
    )
  }

  return null
}
