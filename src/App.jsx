import React, { useState, useEffect, Suspense, lazy } from 'react'
import CustomCursor from './components/CustomCursor/CustomCursor'
import IntroAnimation from './components/Intro/IntroAnimation'
import Navigation from './components/Navigation/Navigation'

// Lazy-load sections for performance
const Hero = lazy(() => import('./components/Hero/Hero'))
const About = lazy(() => import('./components/About/About'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Journey = lazy(() => import('./components/Journey/Journey'))
const ContactSection = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

import './styles/App.css'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [skipIntro, setSkipIntro] = useState(false)

  useEffect(() => {
    if (skipIntro) setIntroComplete(true)
  }, [skipIntro])

  return (
    <>
      {/* Custom cursor — disabled on touch devices via CSS */}
      <CustomCursor />

      {/* Intro splash */}
      {!introComplete && (
        <IntroAnimation
          onComplete={() => setIntroComplete(true)}
          onSkip={() => setSkipIntro(true)}
        />
      )}

      {/* Main app */}
      <div
        className={`app-shell ${introComplete ? 'app-visible' : 'app-hidden'}`}
        aria-hidden={!introComplete}
      >
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

        <Suspense fallback={<div className="section-loading" />}>
          <main id="main-content">
            <section id="hero">
              <Hero setActiveSection={setActiveSection} />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="journey">
              <Journey />
            </section>
            <section id="contact">
              <ContactSection />
            </section>
          </main>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}
