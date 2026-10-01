import React, { useState, useEffect, Suspense, lazy } from 'react'
import CustomCursor from './components/CustomCursor/CustomCursor'
import IntroAnimation from './components/Intro/IntroAnimation'
import Navigation from './components/Navigation/Navigation'
import './styles/App.css'
const Hero          = lazy(() => import('./components/Hero/Hero'))
const About         = lazy(() => import('./components/About/About'))
const Experience    = lazy(() => import('./components/Experience/Experience'))
const Projects      = lazy(() => import('./components/Projects/Projects'))
const Skills        = lazy(() => import('./components/Skills/Skills'))
const EducationCerts = lazy(() => import('./components/EducationCerts/EducationCerts'))
const Contact       = lazy(() => import('./components/Contact/Contact'))
const Footer        = lazy(() => import('./components/Footer/Footer'))

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [skipIntro,    setSkipIntro]     = useState(false)

  useEffect(() => {
    if (skipIntro) setIntroComplete(true)
  }, [skipIntro])

  return (
    <>
      <CustomCursor />
      {!introComplete && (
        <IntroAnimation
          onComplete={() => setIntroComplete(true)}
          onSkip={() => setSkipIntro(true)}
        />
      )}
      <div
        className={`app-shell ${introComplete ? 'app-visible' : 'app-hidden'}`}
        aria-hidden={!introComplete}
      >
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <Suspense fallback={<div className="section-loading" aria-hidden="true" />}>
          <main id="main-content">
            <section id="hero">
              <Hero setActiveSection={setActiveSection} />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="experience">
              <Experience />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="educerts">
              <EducationCerts />
            </section>
            <section id="contact">
              <Contact />
            </section>

          </main>

          <Footer />
        </Suspense>
      </div>
    </>
  )
}
