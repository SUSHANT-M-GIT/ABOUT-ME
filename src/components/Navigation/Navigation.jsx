import React, { useState, useEffect } from 'react'
import './Navigation.css'

const navItems = [
  { id: 'hero',       label: 'Home'       },
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'skills',     label: 'Skills'     },
  { id: 'contact',    label: 'Contact'    },
]

export default function Navigation({ activeSection, setActiveSection }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [setActiveSection])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <nav
      className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <button
        className="nav-logo"
        onClick={() => scrollTo('hero')}
        aria-label="Go to top"
      >
        <span className="nav-logo-letter">S</span>
        <span className="nav-logo-dot" aria-hidden="true" />
      </button>
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
      <a
        href="/Sushant_Resume.pdf"
        download="Sushant_Resume.pdf"
        className="nav-resume-btn"
        aria-label="Download Sushant's resume"
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Resume
      </a>
      <button
        className={`nav-hamburger ${menuOpen ? 'nav-hamburger-open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span /><span /><span />
      </button>
      {menuOpen && (
        <div
          id="mobile-menu"
          className="nav-mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
        >
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-mobile-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}

          <a
            href="/Sushant_Resume.pdf"
            download="Sushant_Resume.pdf"
            className="nav-mobile-resume"
            aria-label="Download resume"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
