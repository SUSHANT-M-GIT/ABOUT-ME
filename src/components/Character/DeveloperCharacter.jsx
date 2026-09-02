import React, { useRef, useState, useEffect } from 'react'
import './DeveloperCharacter.css'

export default function DeveloperCharacter({ hoveredSection, mouseX, mouseY }) {
  const [blink, setBlink] = useState(false)
  const [breath, setBreath] = useState(false)

  // Blink animation
  useEffect(() => {
    const blinkInterval = () => {
      setBlink(true)
      setTimeout(() => setBlink(false), 150)
      const next = 2500 + Math.random() * 3000
      return setTimeout(blinkInterval, next)
    }
    const t = setTimeout(blinkInterval, 2000)
    return () => clearTimeout(t)
  }, [])

  // Breathing
  useEffect(() => {
    const id = setInterval(() => setBreath(p => !p), 2000)
    return () => clearInterval(id)
  }, [])

  // Eye look direction based on hovered section or mouse
  const eyeX = hoveredSection === 'projects' ? 3
             : hoveredSection === 'about' ? -3
             : mouseX * 3
  const eyeY = mouseY * 2
  const headTilt = hoveredSection === 'projects' ? 3
                 : hoveredSection === 'about' ? -3
                 : mouseX * 2

  return (
    <div
      className={`dev-character ${breath ? 'breathing' : ''}`}
      aria-hidden="true"
      role="img"
      aria-label="Stylized 3D developer character representing Sushant"
    >
      <svg
        viewBox="0 0 200 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dev-char-svg"
        style={{ '--eye-x': `${eyeX}px`, '--eye-y': `${eyeY}px`, '--head-tilt': `${headTilt}deg` }}
      >
        <defs>
          {/* Skin gradient */}
          <linearGradient id="skin" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#D4956A"/>
            <stop offset="100%" stopColor="#C07A4A"/>
          </linearGradient>

          {/* Hoodie gradient - deep purple/dark */}
          <linearGradient id="hoodie" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1b3e"/>
            <stop offset="50%" stopColor="#16133a"/>
            <stop offset="100%" stopColor="#0e0c28"/>
          </linearGradient>

          {/* Hoodie detail */}
          <linearGradient id="hoodieLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(108,99,255,0.15)"/>
            <stop offset="100%" stopColor="transparent"/>
          </linearGradient>

          {/* Pants */}
          <linearGradient id="pants" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#141424"/>
            <stop offset="100%" stopColor="#0a0a18"/>
          </linearGradient>

          {/* Laptop screen */}
          <linearGradient id="screen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d1117"/>
            <stop offset="100%" stopColor="#090d14"/>
          </linearGradient>

          {/* Laptop body */}
          <linearGradient id="laptopBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e1e2e"/>
            <stop offset="100%" stopColor="#141420"/>
          </linearGradient>

          {/* Hair */}
          <linearGradient id="hair" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a0a08"/>
            <stop offset="100%" stopColor="#0d0608"/>
          </linearGradient>

          {/* Sneaker accent */}
          <linearGradient id="sneakerAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6C63FF"/>
            <stop offset="100%" stopColor="#00D9FF"/>
          </linearGradient>

          {/* Screen glow */}
          <radialGradient id="screenGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(108,99,255,0.2)"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>

          {/* Character glow at bottom */}
          <radialGradient id="charGlow" cx="50%" cy="100%">
            <stop offset="0%" stopColor="rgba(108,99,255,0.3)"/>
            <stop offset="70%" stopColor="transparent"/>
          </radialGradient>

          {/* Drop shadow filter */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0,0,0,0.5)"/>
          </filter>

          {/* Subtle rim light */}
          <filter id="rimLight">
            <feColorMatrix type="saturate" values="1.5"/>
          </filter>
        </defs>

        {/* ── BODY GROUP (breathing transform) ── */}
        <g className="char-body-group" style={{ transformOrigin: '100px 200px' }}>

          {/* Shadow blob */}
          <ellipse cx="100" cy="348" rx="45" ry="8" fill="rgba(0,0,0,0.4)" />

          {/* ── LEGS & SNEAKERS ── */}
          {/* Left leg */}
          <rect x="62" y="225" width="30" height="72" rx="6" fill="url(#pants)"/>
          {/* Right leg */}
          <rect x="108" y="225" width="30" height="72" rx="6" fill="url(#pants)"/>

          {/* Belt */}
          <rect x="60" y="223" width="80" height="8" rx="3" fill="#1a1a30"/>
          <rect x="95" y="225" width="10" height="6" rx="1" fill="#6C63FF"/>

          {/* Left sneaker */}
          <ellipse cx="77" cy="300" rx="22" ry="10" fill="#1a1a30"/>
          <path d="M55 296 Q77 289 99 296 L99 302 Q77 306 55 302Z" fill="url(#sneakerAccent)" opacity="0.9"/>
          <ellipse cx="77" cy="302" rx="22" ry="6" fill="#111120"/>
          <rect x="62" y="294" width="4" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>

          {/* Right sneaker */}
          <ellipse cx="123" cy="300" rx="22" ry="10" fill="#1a1a30"/>
          <path d="M101 296 Q123 289 145 296 L145 302 Q123 306 101 302Z" fill="url(#sneakerAccent)" opacity="0.9"/>
          <ellipse cx="123" cy="302" rx="22" ry="6" fill="#111120"/>
          <rect x="128" y="294" width="4" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>

          {/* ── TORSO / HOODIE ── */}
          {/* Main body */}
          <path d="M50 130 L54 125 Q66 112 82 110 L90 116 L100 118 L110 116 L118 110 Q134 112 146 125 L150 130 L156 220 L44 220 Z"
            fill="url(#hoodie)" filter="url(#softShadow)"/>

          {/* Hoodie highlight */}
          <path d="M50 130 L54 125 Q66 112 82 110 L90 116 L100 118 L110 116 L118 110 Q134 112 146 125 L150 130 L152 160 Q100 165 48 160 Z"
            fill="url(#hoodieLight)" opacity="0.6"/>

          {/* Collar / hood detail */}
          <path d="M86 116 Q100 126 114 116 Q108 128 100 130 Q92 128 86 116Z"
            fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"/>

          {/* Front pocket */}
          <path d="M75 168 Q100 172 125 168 L123 188 Q100 191 77 188 Z"
            fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>

          {/* Pocket zipper */}
          <line x1="100" y1="168" x2="100" y2="188" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5"/>

          {/* ── LEFT ARM ── */}
          <path d="M50 130 Q36 150 34 185 L42 188 Q44 158 56 140 Z" fill="url(#hoodie)"/>
          {/* Left cuff */}
          <ellipse cx="38" cy="188" rx="8" ry="5" fill="#1e1b3e"/>
          {/* Left hand */}
          <ellipse cx="38" cy="192" rx="8" ry="7" fill="url(#skin)"/>

          {/* ── RIGHT ARM (holding laptop) ── */}
          <path d="M150 130 Q164 150 166 185 L158 188 Q156 158 144 140 Z" fill="url(#hoodie)"/>
          {/* Right cuff */}
          <ellipse cx="162" cy="188" rx="8" ry="5" fill="#1e1b3e"/>
          {/* Right hand */}
          <ellipse cx="162" cy="192" rx="8" ry="7" fill="url(#skin)"/>

          {/* ── LAPTOP ── */}
          {/* Laptop base */}
          <rect x="35" y="192" width="88" height="56" rx="5" fill="url(#laptopBody)"/>
          {/* Screen outer */}
          <rect x="37" y="194" width="84" height="52" rx="4" fill="url(#screen)"/>
          {/* Screen glow */}
          <rect x="37" y="194" width="84" height="52" rx="4" fill="url(#screenGlow)"/>
          {/* Code lines on screen */}
          <rect x="42" y="202" width="36" height="2.5" rx="1.2" fill="#6C63FF" opacity="0.9"/>
          <rect x="42" y="208" width="24" height="2.5" rx="1.2" fill="#00D9FF" opacity="0.9"/>
          <rect x="42" y="214" width="32" height="2.5" rx="1.2" fill="#FF6B6B" opacity="0.8"/>
          <rect x="42" y="220" width="18" height="2.5" rx="1.2" fill="#6C63FF" opacity="0.7"/>
          <rect x="42" y="226" width="28" height="2.5" rx="1.2" fill="#00D9FF" opacity="0.7"/>
          <rect x="42" y="232" width="22" height="2.5" rx="1.2" fill="#a8ff78" opacity="0.6"/>
          {/* Cursor blink */}
          <rect x="72" y="202" width="2" height="2.5" rx="0.5" fill="white" opacity="0.8" className="screen-cursor"/>
          {/* Laptop hinge/trackpad */}
          <rect x="56" y="248" width="48" height="3" rx="1.5" fill="#0a0a14" opacity="0.8"/>
          <rect x="71" y="244" width="18" height="6" rx="2" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
          {/* Apple-style logo placeholder */}
          <circle cx="79" cy="192" r="3" fill="rgba(255,255,255,0.04)"/>

          {/* Screen light reflecting on face (subtle) */}
          <ellipse cx="100" cy="75" rx="26" ry="16" fill="rgba(108,99,255,0.06)"/>

          {/* ── NECK ── */}
          <rect x="90" y="105" width="20" height="14" rx="4" fill="url(#skin)"/>

          {/* ── HEAD GROUP ── */}
          <g className="char-head-group" style={{ transform: `rotate(${headTilt}deg)`, transformOrigin: '100px 80px' }}>
            {/* Head base */}
            <ellipse cx="100" cy="76" rx="34" ry="36" fill="url(#skin)" filter="url(#softShadow)"/>

            {/* Ear left */}
            <ellipse cx="66" cy="76" rx="6" ry="8" fill="url(#skin)"/>
            <ellipse cx="66" cy="76" rx="3.5" ry="5" fill="#C07A4A"/>
            {/* Ear right */}
            <ellipse cx="134" cy="76" rx="6" ry="8" fill="url(#skin)"/>
            <ellipse cx="134" cy="76" rx="3.5" ry="5" fill="#C07A4A"/>

            {/* ── HAIR ── */}
            {/* Main hair volume */}
            <path d="M66 56 Q68 38 100 34 Q132 38 134 56 Q126 42 100 40 Q74 42 66 56Z"
              fill="url(#hair)"/>
            {/* Side sweep */}
            <path d="M66 56 Q62 66 64 78 Q66 46 74 42 Z" fill="url(#hair)"/>
            <path d="M134 56 Q138 66 136 78 Q134 46 126 42 Z" fill="url(#hair)"/>
            {/* Top flow strands */}
            <path d="M80 36 Q92 28 100 34 Q108 28 120 36 Q108 32 100 36 Q92 32 80 36Z"
              fill="#0d0608"/>
            {/* Hairline front */}
            <path d="M72 55 Q80 46 100 44 Q120 46 128 55 Q118 50 100 50 Q82 50 72 55Z"
              fill="url(#hair)"/>

            {/* ── FACE FEATURES ── */}
            {/* Forehead subtle highlight */}
            <ellipse cx="95" cy="62" rx="12" ry="8" fill="rgba(255,220,180,0.12)"/>

            {/* Eyebrows */}
            <path d="M80 66 Q87 62 94 64" stroke="#3d1c0c" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <path d="M106 64 Q113 62 120 66" stroke="#3d1c0c" strokeWidth="2.2" strokeLinecap="round" fill="none"/>

            {/* Eye sockets / depth */}
            <ellipse cx="87" cy="74" rx="10" ry="8" fill="rgba(0,0,0,0.1)"/>
            <ellipse cx="113" cy="74" rx="10" ry="8" fill="rgba(0,0,0,0.1)"/>

            {/* Whites */}
            <ellipse cx="87" cy="74" rx="7.5" ry="6" fill="white"/>
            <ellipse cx="113" cy="74" rx="7.5" ry="6" fill="white"/>

            {/* Irises */}
            <circle
              cx={87 + eyeX * 0.3}
              cy={74 + eyeY * 0.3}
              r="4.5"
              fill="#2c1810"
              className="char-eye"
              style={{ transform: `translate(var(--eye-x, 0), var(--eye-y, 0))` }}
            />
            <circle
              cx={113 + eyeX * 0.3}
              cy={74 + eyeY * 0.3}
              r="4.5"
              fill="#2c1810"
              className="char-eye"
            />

            {/* Pupils */}
            <circle cx={87 + eyeX * 0.4} cy={74 + eyeY * 0.4} r="2.5" fill="#0d0608"/>
            <circle cx={113 + eyeX * 0.4} cy={74 + eyeY * 0.4} r="2.5" fill="#0d0608"/>

            {/* Eye highlights */}
            <circle cx={85 + eyeX * 0.2} cy={72 + eyeY * 0.2} r="1.2" fill="white"/>
            <circle cx={111 + eyeX * 0.2} cy={72 + eyeY * 0.2} r="1.2" fill="white"/>

            {/* Blink overlay */}
            {blink && (
              <>
                <ellipse cx="87" cy="74" rx="7.5" ry="1.5" fill="url(#skin)"/>
                <ellipse cx="113" cy="74" rx="7.5" ry="1.5" fill="url(#skin)"/>
              </>
            )}

            {/* Eyelashes top */}
            <path d="M80 69 Q87 66 94 69" stroke="#1a0a08" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
            <path d="M106 69 Q113 66 120 69" stroke="#1a0a08" strokeWidth="0.8" fill="none" strokeLinecap="round"/>

            {/* Nose */}
            <ellipse cx="100" cy="84" rx="3" ry="2" fill="#B87050" opacity="0.4"/>
            <path d="M96 82 Q100 86 104 82" stroke="#B87050" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.5"/>

            {/* Cheeks */}
            <ellipse cx="80" cy="83" rx="7" ry="4" fill="rgba(255,100,80,0.08)"/>
            <ellipse cx="120" cy="83" rx="7" ry="4" fill="rgba(255,100,80,0.08)"/>

            {/* Mouth / smile */}
            <path d="M91 92 Q100 99 109 92" stroke="#7a3a20" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            {/* Lower lip */}
            <ellipse cx="100" cy="95" rx="6" ry="2" fill="rgba(180,100,60,0.2)"/>

            {/* Jaw highlight */}
            <path d="M72 88 Q78 106 100 110 Q122 106 128 88" stroke="rgba(200,140,90,0.1)" strokeWidth="0.5" fill="none"/>
          </g>

          {/* ── SKILLS PARTICLES (visible when hoveredSection === 'skills') ── */}
          {hoveredSection === 'skills' && (
            <g className="skill-particles">
              {['⚛️','🐍','JS','📊','🗃️'].map((icon, i) => (
                <text
                  key={i}
                  x={100 + Math.cos(i * 72 * Math.PI / 180) * 80}
                  y={100 + Math.sin(i * 72 * Math.PI / 180) * 80}
                  fontSize="14"
                  textAnchor="middle"
                  className="skill-orbit-icon"
                  style={{ '--orbit-delay': `${i * 0.2}s` }}
                >
                  {icon}
                </text>
              ))}
            </g>
          )}
        </g>
      </svg>

      {/* Floating tech badges */}
      {hoveredSection === 'skills' && (
        <div className="char-skill-badges">
          {['React', 'Node.js', 'Python', 'MongoDB'].map((t, i) => (
            <span
              key={t}
              className="char-skill-badge"
              style={{ '--i': i }}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Experience holographic effect */}
      {hoveredSection === 'journey' && (
        <div className="char-hologram" aria-hidden="true">
          <div className="hologram-line" />
          <div className="hologram-line" style={{ '--w': '60%', '--delay': '0.1s' }}/>
          <div className="hologram-line" style={{ '--w': '40%', '--delay': '0.2s' }}/>
        </div>
      )}
    </div>
  )
}
