import React, { useEffect, useRef, useState } from 'react'
import './IntroAnimation.css'

export default function IntroAnimation({ onComplete, onSkip }) {
  const [phase, setPhase] = useState(0)
  // phase 0: dark
  // phase 1: point
  // phase 2: portal expanding
  // phase 3: character emerges
  // phase 4: everything settles
  // phase 5: fade out

  useEffect(() => {
    const timings = [200, 700, 1400, 2100, 2700, 3100]
    const timers = timings.map((t, i) =>
      setTimeout(() => setPhase(i + 1), t)
    )
    const complete = setTimeout(onComplete, 3400)
    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(complete)
    }
  }, [onComplete])

  return (
    <div
      className={`intro-overlay ${phase >= 5 ? 'intro-fadeout' : ''}`}
      role="presentation"
      aria-hidden="true"
    >
      {/* Skip button */}
      <button
        className="intro-skip"
        onClick={onSkip}
        aria-label="Skip intro animation"
        tabIndex={0}
      >
        Skip intro
      </button>

      {/* Portal container */}
      <div className="intro-center">
        {/* Phase 1: glowing point */}
        {phase >= 1 && (
          <div className={`intro-point ${phase >= 2 ? 'intro-point-expand' : ''}`} />
        )}

        {/* Phase 2: portal rings */}
        {phase >= 2 && (
          <div className={`intro-portal ${phase >= 3 ? 'intro-portal-open' : ''}`}>
            <div className="portal-ring portal-ring-1" />
            <div className="portal-ring portal-ring-2" />
            <div className="portal-ring portal-ring-3" />
            <div className="portal-glow" />
          </div>
        )}

        {/* Phase 3: character silhouette rising */}
        {phase >= 3 && (
          <div className={`intro-character ${phase >= 4 ? 'intro-character-settled' : ''}`}>
            <svg viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="intro-char-svg">
              {/* Head */}
              <ellipse cx="60" cy="42" rx="22" ry="24" fill="url(#headGrad)" />
              {/* Hair */}
              <path d="M38 32 Q40 18 60 16 Q80 18 82 32 Q78 24 60 22 Q42 24 38 32Z" fill="#1a0a2e"/>
              {/* Face highlight */}
              <ellipse cx="54" cy="36" rx="5" ry="6" fill="rgba(255,255,255,0.15)" />
              {/* Eyes */}
              <ellipse cx="52" cy="40" rx="3.5" ry="3.5" fill="#1a0a2e"/>
              <ellipse cx="68" cy="40" rx="3.5" ry="3.5" fill="#1a0a2e"/>
              <ellipse cx="51" cy="39" rx="1.2" ry="1.2" fill="white"/>
              <ellipse cx="67" cy="39" rx="1.2" ry="1.2" fill="white"/>
              {/* Smile */}
              <path d="M53 48 Q60 53 67 48" stroke="#1a0a2e" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Neck */}
              <rect x="54" y="64" width="12" height="12" rx="3" fill="#C9956B"/>
              {/* Body - hoodie */}
              <path d="M28 78 L32 76 Q42 70 52 70 L54 76 L60 78 L66 76 L68 70 Q78 70 88 76 L92 78 L96 130 L24 130 Z" fill="url(#hoodieGrad)"/>
              {/* Hoodie collar */}
              <path d="M50 72 Q60 80 70 72" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none"/>
              {/* Left arm */}
              <path d="M28 80 Q18 95 20 120 L28 118 Q26 98 34 88Z" fill="url(#hoodieGrad)"/>
              {/* Right arm */}
              <path d="M92 80 Q102 95 100 120 L92 118 Q94 98 86 88Z" fill="url(#hoodieGrad)"/>
              {/* Left hand with laptop */}
              <ellipse cx="22" cy="121" rx="7" ry="5" fill="#C9956B"/>
              {/* Laptop */}
              <rect x="28" y="115" width="40" height="26" rx="3" fill="#1a1a2e"/>
              <rect x="30" y="117" width="36" height="22" rx="2" fill="url(#screenGrad)"/>
              <rect x="20" y="141" width="56" height="4" rx="2" fill="#0d0d1a"/>
              {/* Laptop glow on face */}
              <ellipse cx="60" cy="42" rx="22" ry="24" fill="url(#faceLaptopGlow)" opacity="0.3"/>
              {/* Pants */}
              <rect x="32" y="130" width="26" height="52" rx="4" fill="#0f0f1f"/>
              <rect x="62" y="130" width="26" height="52" rx="4" fill="#0f0f1f"/>
              {/* Belt detail */}
              <rect x="32" y="130" width="56" height="6" rx="2" fill="#1a1a2e"/>
              {/* Sneakers */}
              <ellipse cx="45" cy="184" rx="16" ry="8" fill="#2a2a3e"/>
              <ellipse cx="75" cy="184" rx="16" ry="8" fill="#2a2a3e"/>
              <path d="M30 180 Q45 175 60 180 L60 184 Q45 186 30 184Z" fill="#6C63FF"/>
              <path d="M60 180 Q75 175 90 180 L90 184 Q75 186 60 184Z" fill="#6C63FF"/>
              {/* Screen code lines */}
              <rect x="33" y="122" width="20" height="2" rx="1" fill="#6C63FF" opacity="0.8"/>
              <rect x="33" y="126" width="14" height="2" rx="1" fill="#00D9FF" opacity="0.8"/>
              <rect x="33" y="130" width="18" height="2" rx="1" fill="#FF6B6B" opacity="0.8"/>
              <rect x="33" y="134" width="10" height="2" rx="1" fill="#6C63FF" opacity="0.8"/>

              <defs>
                <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4A574"/>
                  <stop offset="100%" stopColor="#C9956B"/>
                </linearGradient>
                <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1e3a"/>
                  <stop offset="100%" stopColor="#0f0f20"/>
                </linearGradient>
                <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d1117"/>
                  <stop offset="100%" stopColor="#0a0a1a"/>
                </linearGradient>
                <radialGradient id="faceLaptopGlow" cx="50%" cy="80%">
                  <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
        )}

        {/* Phase 4: name reveal */}
        {phase >= 4 && (
          <div className="intro-name">
            <span className="intro-name-text">SUSHANT</span>
          </div>
        )}
      </div>

      {/* Floating particles */}
      {phase >= 3 && (
        <div className="intro-particles" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="intro-particle" style={{
              '--delay': `${i * 0.08}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--size': `${2 + Math.random() * 4}px`,
            }} />
          ))}
        </div>
      )}
    </div>
  )
}
