import React, { useState, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { skills } from '../../data/portfolio'
import './Skills.css'

const categories = [
  { key: 'languages', label: 'Languages',        icon: '🔤' },
  { key: 'frontend',  label: 'Frontend',          icon: '🎨' },
  { key: 'backend',   label: 'Backend',           icon: '⚙️' },
  { key: 'databases', label: 'Databases',         icon: '🗄️' },
  { key: 'data',      label: 'Data',              icon: '📊' },
  { key: 'tools',     label: 'Tools & Deploy',    icon: '🛠️' },
  { key: 'cs',        label: 'Core CS',           icon: '🧠' },
]

export default function Skills() {
  const sectionRef   = useRef(null)
  const inView       = useInView(sectionRef, { threshold: 0.1 })
  const [active, setActive] = useState('all')

  const allSkills = categories.flatMap(c =>
    skills[c.key].map(s => ({ ...s, category: c.key, categoryLabel: c.label }))
  )

  const displayed = active === 'all'
    ? allSkills
    : allSkills.filter(s => s.category === active)

  return (
    <section
      className={`skills section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
      aria-labelledby="skills-heading"
    >
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">06 · SKILLS</span>
        <span className="section-label-line" />
      </div>

      <div className="skills-inner">
        <div className="skills-header">
          <h2 className="section-heading" id="skills-heading">SKILLS</h2>
          <p className="skills-subtitle">Technologies I build with.</p>
        </div>
        <div className="skills-core" aria-label="Primary tech stack">
          <p className="skills-core-label">Primary stack</p>
          <div className="skills-core-pills">
            {skills.core.map(s => (
              <span
                key={s.name}
                className="core-pill"
                style={{ '--color': s.color }}
                aria-label={s.name}
              >
                <span className="core-pill-icon" aria-hidden="true">{s.icon}</span>
                {s.name}
              </span>
            ))}
          </div>
        </div>
        <div className="skills-tabs" role="tablist" aria-label="Filter skills by category">
          <button
            className={`skill-tab ${active === 'all' ? 'skill-tab-active' : ''}`}
            onClick={() => setActive('all')}
            role="tab"
            aria-selected={active === 'all'}
          >
            All
          </button>
          {categories.map(c => (
            <button
              key={c.key}
              className={`skill-tab ${active === c.key ? 'skill-tab-active' : ''}`}
              onClick={() => setActive(c.key)}
              role="tab"
              aria-selected={active === c.key}
            >
              <span aria-hidden="true">{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>
        <div className="skills-grid" role="list" aria-label="Skills">
          {displayed.map((skill, i) => (
            <span
              key={`${skill.category}-${skill.name}`}
              className="skill-pill"
              style={{
                '--delay': `${i * 0.025}s`,
                '--color': skill.color || '#6C63FF',
              }}
              role="listitem"
              aria-label={`${skill.name} — ${skill.categoryLabel}`}
            >
              <span className="pill-icon" aria-hidden="true">{skill.icon}</span>
              <span className="pill-name">{skill.name}</span>
            </span>
          ))}
        </div>
        {active === 'all' && (
          <div className="skills-categories" aria-label="Skills by category">
            {categories.map((cat, ci) => (
              <div
                key={cat.key}
                className="skill-cat-card glass-card"
                style={{ '--delay': `${ci * 0.05}s` }}
              >
                <div className="cat-head">
                  <span className="cat-icon" aria-hidden="true">{cat.icon}</span>
                  <span className="cat-label">{cat.label}</span>
                </div>
                <div className="cat-pills">
                  {skills[cat.key].map(s => (
                    <span
                      key={s.name}
                      className="cat-pill"
                      style={{ '--color': s.color }}
                    >
                      {s.name}
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
