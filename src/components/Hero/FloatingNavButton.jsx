import React, { useRef, useEffect } from 'react'
import './FloatingNavButton.css'

export default function FloatingNavButton({
  id, label, sub, side, delay,
  onHover, onLeave, onClick
}) {
  const btnRef = useRef(null)

  // Magnetic effect
  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const strength = Math.max(0, 1 - dist / 120)
      const mx = dx * strength * 0.3
      const my = dy * strength * 0.3
      btn.style.transform = `translate(${mx}px, ${my}px) scale(${1 + strength * 0.04})`
    }

    const handleLeave = () => {
      btn.style.transform = 'translate(0, 0) scale(1)'
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <button
      ref={btnRef}
      className={`float-nav-btn float-nav-btn-${side}`}
      style={{ '--delay': `${delay}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      aria-label={`Navigate to ${label} section`}
    >
      <div className="float-nav-inner">
        <span className="float-nav-label">{label}</span>
        <span className="float-nav-sub">{sub}</span>
        <div className="float-nav-arrow">
          {side === 'right' ? '→' : '←'}
        </div>
      </div>
      <div className="float-nav-border" />
      <div className="float-nav-glow" />
    </button>
  )
}
