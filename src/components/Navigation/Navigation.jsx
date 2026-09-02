import React, { useState, useEffect } from 'react'
import './Navigation.css'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [setActiveSection])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Logo */}
      <button
        className="nav-logo"
        onClick={() => scrollTo('hero')}
        aria-label="Go to top"
      >
        <span className="nav-logo-letter">S</span>
        <span className="nav-logo-dot" />
      </button>

      {/* Desktop links */}
      <ul className="nav-links" role="list">
        {navItems.map(item => (
          <li key={item.id}>
            <button
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              onClick={() => scrollTo(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Resume download */}
      <a
        href="/Sushant_Resume.pdf"
        download="Sushant_Resume.pdf"
        className="nav-resume-btn"
        aria-label="Download Sushant's resume"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Resume
      </a>

      {/* CTA */}
      <a
        href="mailto:mishrasushant029@gmail.com"
        className="nav-cta"
        aria-label="Send email to Sushant"
      >
        Let's Talk
      </a>

      {/* Mobile hamburger */}
      <button
        className={`nav-hamburger ${menuOpen ? 'nav-hamburger-open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu" role="dialog" aria-label="Mobile navigation">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-mobile-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a href="mailto:mishrasushant029@gmail.com" className="nav-mobile-cta">
            Let's Talk
          </a>
          <a
            href="/Sushant_Resume.pdf"
            download="Sushant_Resume.pdf"
            className="nav-mobile-resume"
            aria-label="Download resume"
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
