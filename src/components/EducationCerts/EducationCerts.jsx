import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { education, certifications } from '../../data/portfolio'
import './EducationCerts.css'

export default function EducationCerts() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section
      className={`educerts section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
      aria-labelledby="educerts-heading"
    >
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">07 · EDUCATION &amp; CERTIFICATIONS</span>
        <span className="section-label-line" />
      </div>

      <div className="educerts-inner">
        <h2 className="section-heading" id="educerts-heading">EDUCATION &amp; CERTIFICATIONS</h2>

        <div className="educerts-grid">
          <div className="educerts-col">
            <h3 className="educerts-col-title">Education</h3>

            <div className="edu-list" role="list">
              {education.map(edu => (
                <div
                  key={edu.id}
                  className={`edu-card glass-card ${edu.primary ? 'edu-card--primary' : 'edu-card--secondary'}`}
                  role="listitem"
                >
                  {edu.primary && (
                    <div className="edu-primary-badge">Current</div>
                  )}
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-degree">{edu.degree}</p>
                  {edu.period && (
                    <p className="edu-meta">
                      {edu.period}
                      {edu.location && <span className="edu-location"> · {edu.location}</span>}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="educerts-col">
            <h3 className="educerts-col-title">Certifications</h3>

            <ul className="cert-list" role="list">
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className="cert-item"
                  style={{ '--delay': `${i * 0.07}s` }}
                  role="listitem"
                >
                  <span className="cert-dot" aria-hidden="true" />
                  <div className="cert-content">
                    <p className="cert-title">{cert.title}</p>
                    <p className="cert-issuer">
                      {cert.issuer}
                      {cert.date && <span className="cert-date"> · {cert.date}</span>}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
