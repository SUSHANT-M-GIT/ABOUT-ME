import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { about } from '../../data/portfolio'
import './About.css'

export default function About() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { threshold: 0.12 })

  return (
    <section
      className={`about section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
      aria-labelledby="about-heading"
    >
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">02 · ABOUT</span>
        <span className="section-label-line" />
      </div>

      <div className="about-inner">
        <div className="about-sidebar">
          <div className="about-edu-card glass-card">
            <span className="edu-icon" aria-hidden="true">🎓</span>
            <div>
              <p className="edu-degree">{about.education.degree}</p>
              <p className="edu-uni">{about.education.university}</p>
              <p className="edu-period">{about.education.period}</p>
            </div>
          </div>

          <a
            href="/Sushant_Resume.pdf"
            download="Sushant_Resume.pdf"
            className="about-resume-btn"
            aria-label="Download Sushant's resume PDF"
          >
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>
        </div>
        <div className="about-content">
          <h2 className="section-heading" id="about-heading">ABOUT ME</h2>

          <p className="about-intro">{about.intro}</p>

          {about.body.map((para, i) => (
            <p
              key={i}
              className="about-para"
              style={{ '--delay': `${i * 0.1 + 0.15}s` }}
            >
              {para}
            </p>
          ))}
          <div className="about-build-section">
            <h3 className="about-build-heading">What I build</h3>
            <div className="about-build-grid" role="list">
              {about.whatIBuild.map((item, i) => (
                <div
                  key={item.label}
                  className="build-card glass-card"
                  style={{ '--delay': `${i * 0.08 + 0.25}s` }}
                  role="listitem"
                >
                  <span className="build-icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <p className="build-label">{item.label}</p>
                    <p className="build-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
