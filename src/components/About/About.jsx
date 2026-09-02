import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { about } from '../../data/portfolio'
import './About.css'

export default function About() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { threshold: 0.15 })

  return (
    <section className={`about section ${inView ? 'in-view' : ''}`} ref={sectionRef} aria-labelledby="about-heading">
      {/* Section label */}
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">02 · ABOUT</span>
        <span className="section-label-line" />
      </div>

      <div className="about-inner">
        {/* Left: character panel */}
        <div className="about-character-panel">
          <div className="about-char-frame">
            {/* Stylized character silhouette for about */}
            <svg viewBox="0 0 160 280" fill="none" className="about-char-svg">
              <defs>
                <linearGradient id="aboSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4956A"/>
                  <stop offset="100%" stopColor="#C07A4A"/>
                </linearGradient>
                <linearGradient id="aboHoodie" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1b3e"/>
                  <stop offset="100%" stopColor="#0e0c28"/>
                </linearGradient>
                <linearGradient id="aboGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(108,99,255,0.4)"/>
                  <stop offset="100%" stopColor="transparent"/>
                </linearGradient>
              </defs>
              {/* Glow aura */}
              <ellipse cx="80" cy="260" rx="50" ry="12" fill="rgba(108,99,255,0.2)"/>
              {/* Legs */}
              <rect x="50" y="178" width="24" height="56" rx="5" fill="#141424"/>
              <rect x="86" y="178" width="24" height="56" rx="5" fill="#141424"/>
              {/* Sneakers */}
              <ellipse cx="62" cy="237" rx="18" ry="8" fill="#1a1a30"/>
              <path d="M44 234 Q62 228 80 234 L80 238 Q62 241 44 238Z" fill="#6C63FF"/>
              <ellipse cx="98" cy="237" rx="18" ry="8" fill="#1a1a30"/>
              <path d="M80 234 Q98 228 116 234 L116 238 Q98 241 80 238Z" fill="#00D9FF"/>
              {/* Body */}
              <path d="M38 103 L42 98 Q53 88 65 86 L71 91 L80 93 L89 91 L95 86 Q107 88 118 98 L122 103 L126 178 L34 178Z" fill="url(#aboHoodie)"/>
              {/* Highlight */}
              <path d="M38 103 L42 98 Q53 88 65 86 L71 91 L80 93 L89 91 L95 86 Q107 88 118 98 L122 103 L124 130 Q80 134 36 130Z" fill="url(#aboGlow)" opacity="0.5"/>
              {/* Arms */}
              <path d="M38 103 Q26 120 28 150 L36 148 Q34 124 44 112Z" fill="url(#aboHoodie)"/>
              <path d="M122 103 Q134 120 132 150 L124 148 Q126 124 116 112Z" fill="url(#aboHoodie)"/>
              <ellipse cx="30" cy="150" rx="7" ry="6" fill="url(#aboSkin)"/>
              <ellipse cx="130" cy="150" rx="7" ry="6" fill="url(#aboSkin)"/>
              {/* Neck */}
              <rect x="72" y="80" width="16" height="11" rx="3" fill="url(#aboSkin)"/>
              {/* Head */}
              <ellipse cx="80" cy="58" rx="28" ry="30" fill="url(#aboSkin)"/>
              {/* Hair */}
              <path d="M52 46 Q54 30 80 26 Q106 30 108 46 Q100 34 80 32 Q60 34 52 46Z" fill="#1a0a08"/>
              <path d="M52 46 Q48 55 50 64 Q52 36 60 32Z" fill="#1a0a08"/>
              <path d="M108 46 Q112 55 110 64 Q108 36 100 32Z" fill="#1a0a08"/>
              {/* Eyes */}
              <ellipse cx="70" cy="56" rx="6" ry="5" fill="white"/>
              <ellipse cx="90" cy="56" rx="6" ry="5" fill="white"/>
              <circle cx="70" cy="57" r="3.5" fill="#2c1810"/>
              <circle cx="90" cy="57" r="3.5" fill="#2c1810"/>
              <circle cx="68.5" cy="55.5" r="1.2" fill="white"/>
              <circle cx="88.5" cy="55.5" r="1.2" fill="white"/>
              {/* Smile */}
              <path d="M73 68 Q80 74 87 68" stroke="#7a3a20" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            </svg>

            {/* Decorative corner accents */}
            <div className="frame-corner frame-corner-tl" />
            <div className="frame-corner frame-corner-tr" />
            <div className="frame-corner frame-corner-bl" />
            <div className="frame-corner frame-corner-br" />
          </div>

          {/* Education card */}
          <div className="about-edu-card glass-card">
            <div className="edu-icon">🎓</div>
            <div>
              <p className="edu-degree">{about.education.degree}</p>
              <p className="edu-uni">{about.education.university}</p>
              <p className="edu-period">{about.education.period}</p>
            </div>
          </div>

          {/* Resume download */}
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

        {/* Right: content panels */}
        <div className="about-content">
          <h2 className="section-heading reveal-text" id="about-heading">ABOUT ME</h2>

          <p className="about-intro">{about.intro}</p>

          {about.body.map((p, i) => (
            <p key={i} className="about-para" style={{ '--delay': `${i * 0.1 + 0.2}s` }}>
              {p}
            </p>
          ))}

          {/* Focus areas */}
          <div className="about-focus-grid">
            {about.focus.map((f, i) => (
              <div
                key={f.label}
                className="focus-card glass-card"
                style={{ '--delay': `${i * 0.08 + 0.3}s` }}
              >
                <span className="focus-icon">{f.icon}</span>
                <div>
                  <p className="focus-label">{f.label}</p>
                  <p className="focus-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
