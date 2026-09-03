import React, { useEffect } from 'react'
import './ProjectDetail.css'

export default function ProjectDetail({ project, onClose }) {
  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div
      className="detail-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
    >
      <div className="detail-backdrop" onClick={onClose} />

      <div className="detail-panel">
        {/* Close */}
        <button className="detail-close" onClick={onClose} aria-label="Close project details">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Header */}
        <div className="detail-header" style={{ '--project-color': project.color }}>
          <div className="detail-tag-row">
            {project.tags.map(t => (
              <span key={t} className="detail-tag">{t}</span>
            ))}
          </div>
          <h2 className="detail-title">{project.title}</h2>
          <p className="detail-tagline">{project.description}</p>

          {/* CTA Buttons */}
          <div className="detail-cta-row">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="detail-btn detail-btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="detail-btn detail-btn-primary">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Flow visualization (Campus Event Finder) */}
        {(project.flow || project.adminFlow) && (
          <div className="detail-flow">
            <h3 className="detail-section-title">Application Flow</h3>

            {project.flow && (
              <>
                <p className="flow-role-label">🎓 Student Flow</p>
                <div className="flow-steps">
                  {project.flow.map((step, i) => (
                    <React.Fragment key={step}>
                      <div className="flow-step" style={{ '--delay': `${i * 0.06}s` }}>
                        <div className="flow-step-num">{String(i + 1).padStart(2, '0')}</div>
                        <div className="flow-step-label">{step}</div>
                      </div>
                      {i < project.flow.length - 1 && (
                        <div className="flow-arrow">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </>
            )}

            {project.adminFlow && (
              <>
                <p className="flow-role-label" style={{ marginTop: '1.2rem' }}>🛠️ Organizer / Admin Flow</p>
                <div className="flow-steps">
                  {project.adminFlow.map((step, i) => (
                    <React.Fragment key={step}>
                      <div className="flow-step flow-step-admin" style={{ '--delay': `${i * 0.06}s` }}>
                        <div className="flow-step-num">{String(i + 1).padStart(2, '0')}</div>
                        <div className="flow-step-label">{step}</div>
                      </div>
                      {i < project.adminFlow.length - 1 && (
                        <div className="flow-arrow">→</div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className="detail-body">
          {/* Features */}
          <div className="detail-section">
            <h3 className="detail-section-title">Key Features</h3>
            <ul className="detail-features">
              {project.features.map(f => (
                <li key={f} className="detail-feature-item">
                  <span className="feature-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="detail-section">
            <h3 className="detail-section-title">Tech Stack</h3>
            <div className="detail-tech">
              {project.tech.map(t => (
                <span key={t} className="detail-tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
