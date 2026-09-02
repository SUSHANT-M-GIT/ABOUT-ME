import React, { useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { skills } from '../../data/portfolio'
import './Skills.css'

const categories = [
  { key: 'languages', label: 'Languages', icon: '🔤' },
  { key: 'frontend', label: 'Frontend', icon: '🎨' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'databases', label: 'Databases', icon: '🗄️' },
  { key: 'data', label: 'Data & Analytics', icon: '📊' },
  { key: 'tools', label: 'Tools & Cloud', icon: '🛠️' },
  { key: 'cs', label: 'Core CS', icon: '🧠' },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { threshold: 0.1 })
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const allSkills = categories.flatMap(c =>
    skills[c.key].map(s => ({ ...s, category: c.key, categoryLabel: c.label }))
  )

  const filtered = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory)

  return (
    <section
      className={`skills section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
      aria-labelledby="skills-heading"
    >
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">04 · SKILLS</span>
        <span className="section-label-line" />
      </div>

      <div className="skills-inner">
        <div className="skills-header">
          <h2 className="section-heading" id="skills-heading">WHAT I USE</h2>
          <p className="skills-subtitle">The tools and technologies I build with.</p>
        </div>

        {/* Category tabs */}
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          <button
            className={`skill-tab ${activeCategory === 'all' ? 'skill-tab-active' : ''}`}
            onClick={() => setActiveCategory('all')}
            role="tab"
            aria-selected={activeCategory === 'all'}
          >
            All
          </button>
          {categories.map(c => (
            <button
              key={c.key}
              className={`skill-tab ${activeCategory === c.key ? 'skill-tab-active' : ''}`}
              onClick={() => setActiveCategory(c.key)}
              role="tab"
              aria-selected={activeCategory === c.key}
            >
              <span>{c.icon}</span> {c.label}
            </button>
          ))}
        </div>

        {/* Orbit center */}
        <div className="skills-orbit-scene">
          {/* Central node */}
          <div className="orbit-core">
            <div className="orbit-core-inner">
              <span className="orbit-core-icon">{ '⚡' }</span>
              <span className="orbit-core-label">
                {hoveredSkill ? hoveredSkill.name : 'DEV'}
              </span>
            </div>
            <div className="orbit-core-ring ring-1" />
            <div className="orbit-core-ring ring-2" />
            <div className="orbit-core-ring ring-3" />
          </div>

          {/* Orbiting skill grid */}
          <div className="skills-grid">
            {filtered.map((skill, i) => (
              <SkillPill
                key={`${skill.category}-${skill.name}`}
                skill={skill}
                index={i}
                onHover={() => setHoveredSkill(skill)}
                onLeave={() => setHoveredSkill(null)}
              />
            ))}
          </div>
        </div>

        {/* Hovered skill info */}
        {hoveredSkill && (
          <div className="skill-tooltip" role="status" aria-live="polite">
            <span className="skill-tooltip-icon">{hoveredSkill.icon}</span>
            <div>
              <p className="skill-tooltip-name">{hoveredSkill.name}</p>
              <p className="skill-tooltip-cat">{hoveredSkill.categoryLabel}</p>
            </div>
          </div>
        )}

        {/* Category breakdown (when not filtering) */}
        {activeCategory === 'all' && (
          <div className="skills-categories-grid">
            {categories.map((cat, ci) => (
              <div key={cat.key} className="skill-category-card glass-card" style={{ '--delay': `${ci * 0.05}s` }}>
                <div className="cat-header">
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-label">{cat.label}</span>
                </div>
                <div className="cat-pills">
                  {skills[cat.key].map(s => (
                    <span
                      key={s.name}
                      className="cat-pill"
                      style={{ '--color': s.color }}
                    >
                      {s.icon} {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function SkillPill({ skill, index, onHover, onLeave }) {
  return (
    <div
      className="skill-pill"
      style={{
        '--delay': `${index * 0.03}s`,
        '--color': skill.color || '#6C63FF',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="listitem"
      aria-label={skill.name}
    >
      <span className="pill-icon">{skill.icon}</span>
      <span className="pill-name">{skill.name}</span>
      <div className="pill-glow" />
    </div>
  )
}
