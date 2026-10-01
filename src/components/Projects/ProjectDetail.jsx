import React, { useEffect, useRef } from 'react'
import './ProjectDetail.css'

export default function ProjectDetail({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const prev = document.activeElement
    closeRef.current?.focus()

    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [onClose])
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return
    const focusable = panel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last  = focusable[focusable.length - 1]

    const trap = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    panel.addEventListener('keydown', trap)
    return () => panel.removeEventListener('keydown', trap)
  }, [])

  const hasImplementation = project.implementation && Object.keys(project.implementation).length > 0

  return (
    <div
      className="detail-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
    >
      <div className="detail-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="detail-panel" ref={panelRef}>
        <button
          ref={closeRef}
          className="detail-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <header className="detail-header" style={{ '--project-color': project.color }}>
          <div className="detail-tags">
            {project.tags.map(t => (
              <span key={t} className="detail-tag">{t}</span>
            ))}
          </div>

          <h2 className="detail-title" id="detail-title">{project.title}</h2>

          <p className="detail-overview">{project.description}</p>
          <div className="detail-ctas">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-btn detail-btn-primary"
              >
                Live Demo
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-btn detail-btn-secondary"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}
          </div>
        </header>
        <div className="detail-body">
          {project.problem && (
            <section className="detail-section" aria-labelledby="ds-problem">
              <h3 className="detail-section-title" id="ds-problem">Problem</h3>
              <p className="detail-section-text">{project.problem}</p>
            </section>
          )}
          {project.solution && (
            <section className="detail-section" aria-labelledby="ds-solution">
              <h3 className="detail-section-title" id="ds-solution">Solution</h3>
              <p className="detail-section-text">{project.solution}</p>
            </section>
          )}
          {project.features?.length > 0 && (
            <section className="detail-section" aria-labelledby="ds-features">
              <h3 className="detail-section-title" id="ds-features">Key Features</h3>
              <ul className="detail-feature-list">
                {project.features.map(f => (
                  <li key={f} className="detail-feature-item">
                    <span className="feature-check" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {hasImplementation && (
            <section className="detail-section" aria-labelledby="ds-impl">
              <h3 className="detail-section-title" id="ds-impl">Technical Implementation</h3>
              <div className="detail-impl-grid">
                {Object.entries(project.implementation).map(([key, val]) => (
                  <div key={key} className="impl-row">
                    <span className="impl-key">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span className="impl-val">{val}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
          {project.challenges?.length > 0 && (
            <section className="detail-section" aria-labelledby="ds-challenges">
              <h3 className="detail-section-title" id="ds-challenges">Engineering Challenges</h3>
              <ul className="detail-challenge-list">
                {project.challenges.map((c, i) => (
                  <li key={i} className="detail-challenge-item">
                    <span className="challenge-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section className="detail-section" aria-labelledby="ds-tech">
            <h3 className="detail-section-title" id="ds-tech">Tech Stack</h3>
            <div className="detail-tech-badges">
              {project.tech.map(t => (
                <span key={t} className="detail-tech-badge">{t}</span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
