import React, { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const trailsRef = useRef([])
  const mouse = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const [cursorType, setCursorType] = useState('default')
  const animRef = useRef(null)

  // Detect touch device
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

  useEffect(() => {
    if (isTouch) return

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const onMouseOver = (e) => {
      const el = e.target
      if (el.closest('a') || el.closest('button') || el.closest('[role="button"]')) {
        setCursorType('link')
      } else if (el.closest('.project-card')) {
        setCursorType('magnetic')
      } else if (el.closest('.hero-character-wrap')) {
        setCursorType('character')
      } else {
        setCursorType('default')
      }
    }

    const onMouseDown = () => setCursorType(prev => prev + ' pressed')
    const onMouseUp = () => setCursorType(prev => prev.replace(' pressed', ''))

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    // Smooth follow animation
    const animate = () => {
      const ease = 0.12
      const ringEase = 0.08

      cursorPos.current.x += (mouse.current.x - cursorPos.current.x) * ease
      cursorPos.current.y += (mouse.current.y - cursorPos.current.y) * ease
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * ringEase
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * ringEase

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x - 6}px, ${cursorPos.current.y - 6}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(animRef.current)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <div className="cursor-system" aria-hidden="true">
      {/* Main orb */}
      <div
        ref={cursorRef}
        className={`cursor-orb cursor-${cursorType.split(' ')[0]}`}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className={`cursor-ring cursor-ring-${cursorType.split(' ')[0]}`}
      />
    </div>
  )
}
