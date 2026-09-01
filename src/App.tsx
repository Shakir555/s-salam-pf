import { useEffect, useRef, useState } from 'react'
import './App.css'
import profileImage from '/img/profile.jpg'

type ProjectType = 'PCB Design' | 'Software'

type Project = {
  title: string
  type: ProjectType
  description: string
  tags: string[]
  image: string
  pdf: string
}

const projects: Project[] = [
  {
    title: 'Software Development Portfolio',
    type: 'Software',
    description:
      'A collection of my software development projects, applications, APIs and system development work.',
    tags: ['React', 'TypeScript', 'API', 'Software'],
    image: '/img/sw-pf.png',
    pdf: '/docu/sw-pf.pdf',
  },
  {
    title: 'PCB & Hardware Portfolio',
    type: 'PCB Design',
    description:
      'A collection of my PCB design, embedded systems and hardware engineering projects.',
    tags: ['PCB Design', 'Embedded', 'Hardware', 'Electronics'],
    image: '/img/pcb-pf.png',
    pdf: '/docu/pcb-pf.pdf',
  },
]

function App() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectType | null>(null)

  const softwareCardRef = useRef<HTMLElement>(null)
  const pcbCardRef = useRef<HTMLElement>(null)

  /*
   * These refs store the timers.
   *
   * This prevents an OLD click from removing
   * the highlight created by a NEW click.
   */
  const highlightTimerRef = useRef<number | null>(null)
  const replayTimerRef = useRef<number | null>(null)

  const selectProject = (type: ProjectType) => {
    /*
     * Cancel the previous highlight timer.
     */
    if (highlightTimerRef.current !== null) {
      window.clearTimeout(highlightTimerRef.current)
      highlightTimerRef.current = null
    }

    /*
     * Cancel the previous animation restart timer.
     */
    if (replayTimerRef.current !== null) {
      window.clearTimeout(replayTimerRef.current)
      replayTimerRef.current = null
    }

    /*
     * Remove the highlight first.
     *
     * This allows the CSS animation to restart
     * even when clicking the same tile again.
     */
    setSelectedProject(null)

    replayTimerRef.current = window.setTimeout(() => {
      /*
       * Select the requested project.
       */
      setSelectedProject(type)

      /*
       * Find the correct portfolio card.
       */
      const target =
        type === 'PCB Design'
          ? pcbCardRef.current
          : softwareCardRef.current

      /*
       * Smoothly scroll to that portfolio card.
       */
      target?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })

      /*
       * Remove the yellow highlight
       * after 2.5 seconds.
       */
      highlightTimerRef.current = window.setTimeout(() => {
        setSelectedProject(null)
        highlightTimerRef.current = null
      }, 2500)

      replayTimerRef.current = null
    }, 50)
  }

  /*
   * Clean up timers if App is removed.
   */
  useEffect(() => {
    return () => {
      if (highlightTimerRef.current !== null) {
        window.clearTimeout(highlightTimerRef.current)
      }

      if (replayTimerRef.current !== null) {
        window.clearTimeout(replayTimerRef.current)
      }
    }
  }, [])

  return (
    <div className="app-shell">

      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}

      <header className="header">
        <a
          className="brand"
          href="#home"
          aria-label="S-Salam home"
        >
          <img
            src={profileImage}
            alt="S-Salam"
            className="brand-profile"
          />

          <span>S-Salam</span>
        </a>

        <nav
          className="nav"
          aria-label="Main navigation"
        >
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      {/* ============================= */}
      {/* MAIN */}
      {/* ============================= */}

      <main>

        {/* ============================= */}
        {/* HERO */}
        {/* ============================= */}

        <section
          className="hero"
          id="home"
        >
          <div className="hero-copy">

            <span className="eyebrow">
              About Me
            </span>

            <h1>
              Engineering{' '}
              <span>
                Practitioner
              </span>
            </h1>

            <p>
              Results-driven software engineer with 3+ years
              of experience in embedded systems, IoT,
              hardware integration, PCB design, application
              development, and web development, with a
              strong background in R&amp;D environments.
              Skilled in ESP-IDF, MCUXpresso, STM32Cube
              (HAL/LL), Microchip ASF, MicroPython, and
              modern software frameworks.
            </p>

            <div className="hero-actions">

              <a
                className="primary-button"
                href="#portfolio"
              >
                View Portfolio
                <span>↘</span>
              </a>

              <a
                className="secondary-button"
                href="#contact"
              >
                Contact Me
              </a>

            </div>
          </div>


          {/* ============================= */}
          {/* HERO PORTFOLIO ART */}
          {/* ============================= */}

          <div className="hero-art">

            <div className="art-card art-card-main">

              <div className="art-card-top">
                <span>
                  Portfolio
                </span>

                <span className="status-dot" />
              </div>


              <div className="art-grid">

                {/* PCB TILE */}

                <button
                  type="button"
                  className="art-tile pcb-tile"
                  onClick={() =>
                    selectProject('PCB Design')
                  }
                  aria-label="View PCB and Hardware Portfolio"
                >
                  <span>
                    PCB
                  </span>

                  <div className="chip" />
                </button>


                {/* SOFTWARE TILE */}

                <button
                  type="button"
                  className="art-tile code-tile"
                  onClick={() =>
                    selectProject('Software')
                  }
                  aria-label="View Software Development Portfolio"
                >
                  <span>
                    &lt;/&gt;
                  </span>

                  <div className="code-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                </button>

              </div>
            </div>


            {/* Decorative Orbs */}

            <span className="orb orb-one" />
            <span className="orb orb-two" />

          </div>
        </section>


        {/* ============================= */}
        {/* PORTFOLIO */}
        {/* ============================= */}

        <section
          className="portfolio-section"
          id="portfolio"
        >

          <div className="section-heading">

            <div>
              <span className="eyebrow">
                Portfolio
              </span>

              <h2>
                Software &amp; Hardware
              </h2>
            </div>

          </div>


          {/* ============================= */}
          {/* PROJECT CARDS */}
          {/* ============================= */}

          <div className="project-grid">

            {projects.map((project, index) => {

              const isSelected =
                selectedProject === project.type

              return (
                <article
                  key={project.title}

                  ref={
                    project.type === 'PCB Design'
                      ? pcbCardRef
                      : softwareCardRef
                  }

                  className={`project-card ${
                    isSelected
                      ? 'project-highlight'
                      : ''
                  }`}
                >

                  {/* ============================= */}
                  {/* PROJECT IMAGE */}
                  {/* ============================= */}

                  <div className="project-preview">

                    <img
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      className="project-thumbnail"
                    />

                    <span className="project-number">
                      0{index + 1}
                    </span>

                    <span className="preview-label">
                      {project.type}
                    </span>

                  </div>


                  {/* ============================= */}
                  {/* PROJECT INFORMATION */}
                  {/* ============================= */}

                  <div className="project-content">

                    <span className="project-type">
                      {project.type}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>


                    {/* ============================= */}
                    {/* PROJECT FOOTER */}
                    {/* ============================= */}

                    <div className="project-footer">

                      <div className="tags">

                        {project.tags.map((tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        ))}

                      </div>


                      {/* PDF DOWNLOAD */}

                      <a
                        href={project.pdf}
                        download
                        className="download-button"
                      >
                        Download PDF
                        <span>↓</span>
                      </a>

                    </div>
                  </div>

                </article>
              )
            })}

          </div>
        </section>


        {/* ============================= */}
        {/* CONTACT */}
        {/* ============================= */}

        <section
          className="contact-section"
          id="contact"
        >

          <div>

            <span className="eyebrow">
              Contact
            </span>

            <h2>
              Let's Collabrate!
            </h2>

            <p>
              Have a project, idea, or content collaboration in mind?
              Feel free to get in touch. I'm open to collaborations and opportunities in
              software development, PCB design, embedded systems, IoT solutions, and YouTube Content Creation.
              Whether it's building a technical project, developing an innovative solution, or collaborating
              on YouTube Videos and Tech Content, I'd happy to connect and explore the possibilities.
              Let's create, build, and share something great together.
            </p>

          </div>


          <a
            className="contact-button"
            href="mailto:your-email@example.com"
          >
            shakirsalam555@Gmail.com

            <span>
              ↗
            </span>
          </a>

        </section>

      </main>


      {/* ============================= */}
      {/* FOOTER */}
      {/* ============================= */}

      <footer className="footer">
        <span>
          © 2026 S-Salam
        </span>
      </footer>

    </div>
  )
}

export default App