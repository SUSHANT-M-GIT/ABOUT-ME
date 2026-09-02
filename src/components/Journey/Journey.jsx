import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { journey } from '../../data/portfolio'
import './Journey.css'

const typeConfig = {
  education: { icon: '🎓', color: '#6C63FF', label: 'Education' },
  certification: { icon: '🏅', color: '#00D9FF', label: 'Certification' },
  current: { icon: '⚡', color: '#00ff88', label: 'Now' },
}

export default function Journey() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section
      className={`journey section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
      aria-labelledby="journey-heading"
    >
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">05 · JOURNEY</span>
        <span className="section-label-line" />
      </div>

      <div className="journey-inner">
        <div className="journey-header">
          <h2 className="section-heading" id="journey-heading">MY JOURNEY</h2>
          <p className="journey-subtitle">Education, certifications &amp; milestones.</p>
        </div>

        {/* Timeline */}
        <div className="timeline" role="list">
          {journey.map((item, i) => {
            const config = typeConfig[item.type] || typeConfig.certification
            return (
              <div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                style={{ '--delay': `${i * 0.12}s`, '--color': config.color }}
                role="listitem"
              >
                {/* Node */}
                <div className="timeline-node">
                  <div className="node-dot">
                    <span className="node-icon">{config.icon}</span>
                  </div>
                  <div className="node-line" />
                </div>

                {/* Content */}
                <div className="timeline-card glass-card">
                  <div className="tcard-header">
                    <span className="tcard-year">{item.year}</span>
                    <span className="tcard-type" style={{ color: config.color }}>
                      {config.label}
                    </span>
                  </div>
                  <h3 className="tcard-title">{item.title}</h3>
                  <p className="tcard-subtitle">{item.subtitle}</p>
                  <p className="tcard-desc">{item.desc}</p>

                  {item.type === 'current' && (
                    <div className="tcard-current">
                      <span className="current-dot" />
                      <span>Actively building & learning</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}

          {/* Center line */}
          <div className="timeline-center-line" aria-hidden="true">
            <div className="tcl-fill" />
          </div>
        </div>
      </div>
    </section>
  )
}
