import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Stars } from '@react-three/drei'
import DeveloperCharacter from '../Character/DeveloperCharacter'
import ParticleField from '../Three/ParticleField'
import { hero, contact } from '../../data/portfolio'
import './Hero.css'

export default function Hero({ setActiveSection }) {
  const heroRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" ref={heroRef} aria-label="Hero section">
      <div className="hero-canvas-wrap" aria-hidden="true">
        <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault fov={60} position={[0, 0, 5]} />
          <ambientLight intensity={0.25} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#6C63FF" />
          <pointLight position={[-5, -2, 3]} intensity={0.35} color="#00D9FF" />
          <Stars radius={100} depth={50} count={1200} factor={3} saturation={0} fade speed={0.3} />
          <ParticleField count={40} />
        </Canvas>
      </div>
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className={`hero-layout ${mounted ? 'hero-mounted' : ''}`}>
        <div className="hero-content">
          <div className="hero-badge" aria-label="Current status">
            <span className="hero-badge-dot" aria-hidden="true" />
            <span>B.Tech CSE &amp; IT · REVA University</span>
          </div>
          <h1 className="hero-name">{hero.name}</h1>
          <div className="hero-title-row" aria-label="Role">
            <span className="hero-title-line" aria-hidden="true" />
            <p className="hero-title">{hero.title}</p>
            <span className="hero-title-line hero-title-line-r" aria-hidden="true" />
          </div>
          <p className="hero-tagline">{hero.tagline}</p>
          <div className="hero-ctas" role="group" aria-label="Primary actions">
            <button
              className="hero-btn hero-btn-primary"
              onClick={() => scrollTo('projects')}
              aria-label="Scroll to projects section"
            >
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <a
              href="/Sushant_Resume.pdf"
              download="Sushant_Resume.pdf"
              className="hero-btn hero-btn-secondary"
              aria-label="Download Sushant's resume PDF"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Resume
            </a>
          </div>
          <div className="hero-links" aria-label="Social links">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
              aria-label="Sushant's GitHub profile"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
              aria-label="Sushant's LinkedIn profile"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-character-col" aria-hidden="true">
          <div className="hero-character-wrap">
            <DeveloperCharacter hoveredSection={null} mouseX={0} mouseY={0} />
            <div className="char-glow-base" />
          </div>
        </div>
      </div>
      <button
        className="hero-scroll-cue"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </button>
    </section>
  )
}
