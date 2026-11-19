import React, { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { skills } from '../../data/portfolio'
import './Skills.css'

// Map keys to display labels
const categories = [
  { key: 'languages',   label: 'Languages'          },
  { key: 'frontend',    label: 'Frontend'            },
  { key: 'backend',     label: 'Backend'             },
  { key: 'databases',   label: 'Databases'           },
  { key: 'dataML',      label: 'Data & ML'           },
  { key: 'cloudDeploy', label: 'Cloud & Deployment'  },
  { key: 'core',        label: 'Core CS'             },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef)

  return (
    <section
      className={`skills section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
      aria-labelledby="skills-heading"
    >
      <div className="section-label">
        <span className="section-label-line" />
        <span className="section-label-text">SKILLS</span>
        <span className="section-label-line" />
      </div>

      <div className="skills-inner">
        <div className="skills-header">
          <h2 className="section-heading" id="skills-heading">SKILLS</h2>
          <p className="skills-subtitle">Technologies I build with.</p>
        </div>

        <div className="skills-categories" aria-label="Skills by category">
          {categories.map((cat, ci) => (
            <div
              key={cat.key}
              className="skill-cat-card glass-card"
              style={{ '--delay': `${ci * 0.06}s` }}
            >
              <p className="cat-label">{cat.label}</p>
              <div className="cat-pills">
                {(skills[cat.key] || []).map(s => (
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
      </div>
    </section>
  )
}
