import React from 'react'
import { contact } from '../../data/portfolio'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-name">Sushant</span>
          <span className="footer-role">Full-Stack Developer</span>
        </div>

        <div className="footer-links">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <span className="footer-sep" aria-hidden="true">·</span>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <span className="footer-sep" aria-hidden="true">·</span>
          <a href={`mailto:${contact.email}`} className="footer-link" aria-label="Email">
            Email
          </a>
        </div>

        <p className="footer-copy">© {year} Sushant. Built with React.</p>
      </div>
    </footer>
  )
}
