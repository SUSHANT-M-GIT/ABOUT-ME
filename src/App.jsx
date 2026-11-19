import React, { useState, useEffect, Suspense, lazy } from 'react'
import CustomCursor from './components/CustomCursor/CustomCursor'
import IntroAnimation from './components/Intro/IntroAnimation'
import Navigation from './components/Navigation/Navigation'
import './styles/App.css'

// Each section is lazy-loaded but wrapped in its own Suspense so section[id]
// elements exist in the DOM before the observer runs.
const Hero        = lazy(() => import('./components/Hero/Hero'))
const Projects    = lazy(() => import('./components/Projects/Projects'))
const Skills      = lazy(() => import('./components/Skills/Skills'))
const About       = lazy(() => import('./components/About/About'))
const Experience  = lazy(() => import('./components/Experience/Experience'))
const EducationCerts = lazy(() => import('./components/EducationCerts/EducationCerts'))
const Contact     = lazy(() => import('./components/Contact/Contact'))
const Footer      = lazy(() => import('./components/Footer/Footer'))

// Detect touch-only device (disable custom cursor on mobile/tablet)
const isTouch = typeof window !== 'undefined' &&
  window.matchMedia('(hover: none)').matches

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <>
      {!isTouch && <CustomCursor />}

      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}

      <div
        className={`app-shell ${introComplete ? 'app-visible' : 'app-hidden'}`}
        aria-hidden={!introComplete}
      >
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <main id="main-content">
          {/* Section wrappers always rendered — each child lazy-loaded separately
              so the observer can find section[id] immediately */}
          <section id="hero">
            <Suspense fallback={null}>
              <Hero setActiveSection={setActiveSection} />
            </Suspense>
          </section>

          <section id="projects">
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
          </section>

          <section id="skills">
            <Suspense fallback={null}>
              <Skills />
            </Suspense>
          </section>

          <section id="about">
            <Suspense fallback={null}>
              <About />
            </Suspense>
          </section>

          <section id="experience">
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </section>

          <section id="educerts">
            <Suspense fallback={null}>
              <EducationCerts />
            </Suspense>
          </section>

          <section id="contact">
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </section>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}
