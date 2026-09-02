import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import DeveloperCharacter from '../Character/DeveloperCharacter'
import FloatingNavButton from './FloatingNavButton'
import ParticleField from '../Three/ParticleField'
import './Hero.css'

const navButtons = [
  { id: 'about',    label: 'ABOUT',      sub: 'Who I am',     side: 'left',  top: '38%' },
  { id: 'journey',  label: 'JOURNEY',    sub: 'My story',     side: 'left',  top: '58%' },
  { id: 'projects', label: 'PROJECTS',   sub: 'What I build', side: 'right', top: '38%' },
  { id: 'skills',   label: 'SKILLS',     sub: 'What I use',   side: 'right', top: '58%' },
]

export default function Hero({ setActiveSection }) {
  const heroRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hoveredBtn, setHoveredBtn] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 200)
  }, [])

  useEffect(() => {
    const handleMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      setMouse({ x: nx, y: ny })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" ref={heroRef} aria-label="Hero section">
      {/* 3D Canvas background */}
      <div className="hero-canvas-wrap" aria-hidden="true">
        <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault fov={60} position={[0, 0, 5]} />
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#6C63FF" />
          <pointLight position={[-5, -2, 3]} intensity={0.5} color="#00D9FF" />
          <pointLight position={[0, -5, 2]} intensity={0.3} color="#FF6B6B" />
          <Stars radius={80} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />
          <ParticleField count={60} />
        </Canvas>
      </div>

      {/* Hero layout: left | center | right */}
      <div className={`hero-layout ${mounted ? 'hero-mounted' : ''}`}>

        {/* Left floating buttons */}
        <div className="hero-side hero-side-left">
          {navButtons.filter(b => b.side === 'left').map((btn, i) => (
            <FloatingNavButton
              key={btn.id}
              {...btn}
              delay={i * 0.1}
              onHover={() => setHoveredBtn(btn.id)}
              onLeave={() => setHoveredBtn(null)}
              onClick={() => scrollTo(btn.id)}
            />
          ))}
        </div>

        {/* Center character */}
        <div className="hero-center">
          <div
            className="hero-character-wrap"
            style={{
              transform: `rotateY(${mouse.x * 4}deg) rotateX(${-mouse.y * 2}deg)`,
            }}
          >
            <DeveloperCharacter
              hoveredSection={hoveredBtn}
              mouseX={mouse.x}
              mouseY={mouse.y}
            />

            {/* Character glow base */}
            <div className="char-glow-base" />
            <div className="char-shadow" />
          </div>

          {/* Hero text */}
          <div className="hero-text">
            <h1 className="hero-name">SUSHANT</h1>
            <div className="hero-title-wrap">
              <span className="hero-title-line" />
              <p className="hero-title">FULL-STACK DEVELOPER</p>
              <span className="hero-title-line" />
            </div>
            <p className="hero-tagline">
              Building scalable web experiences &amp; turning data into meaningful insights.
            </p>
            <p className="hero-status">
              <span className="hero-status-dot" />
              B.Tech CSE &amp; IT · REVA University
            </p>

            {/* Resume download */}
            <a
              href="/Sushant_Resume.pdf"
              download="Sushant_Resume.pdf"
              className="hero-resume-btn"
              aria-label="Download Sushant's resume PDF"
            >
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Resume
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            className="hero-scroll-indicator"
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About section"
          >
            <div className="scroll-mouse">
              <div className="scroll-wheel" />
            </div>
            <span>Scroll</span>
          </button>
        </div>

        {/* Right floating buttons */}
        <div className="hero-side hero-side-right">
          {navButtons.filter(b => b.side === 'right').map((btn, i) => (
            <FloatingNavButton
              key={btn.id}
              {...btn}
              delay={i * 0.1 + 0.05}
              onHover={() => setHoveredBtn(btn.id)}
              onLeave={() => setHoveredBtn(null)}
              onClick={() => scrollTo(btn.id)}
            />
          ))}
        </div>
      </div>

      {/* Ambient background elements */}
      <div className="hero-bg-orb hero-bg-orb-1" aria-hidden="true" />
      <div className="hero-bg-orb hero-bg-orb-2" aria-hidden="true" />
      <div className="hero-bg-grid" aria-hidden="true" />
    </section>
  )
}
