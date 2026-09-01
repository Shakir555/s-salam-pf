import './App.css'
import profileImage from "/img/profile.jpg"

type Project = {
  title: string
  type: 'PCB Design' | 'Software'
  description: string
  tags: string[]
}

const projects = [
  {
    title: "Software Development Portfolio",
    type: "Software",
    description:
      "A collection of my software development projects, applications, APIs and system development work.",
    tags: ["React", "TypeScript", "API", "Software"],
    image: "/img/sw-pf.png",
    pdf: "/docu/sw-pf.pdf",
  },
  {
    title: "PCB & Hardware Portfolio",
    type: "PCB Design",
    description:
      "A collection of my PCB design, embedded systems and hardware engineering projects.",
    tags: ["PCB Design", "Embedded", "Hardware", "Electronics"],
    image: "/img/pcb-pf.png",
    pdf: "/docu/pcb-pf.pdf",
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="header">
        <a className="brand" href="#home" aria-label="S-Salam home">
          <img
            src={profileImage}
            alt="S-Salam"
            className="brand-profile"
          />
          <span>S-Salam</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">About Me</span>
            <h1>
              Engineering <span>Practitioner</span> 
            </h1>
            <p>
              Results-driven software engineer with 3+ years of experience in embedded systems, 
              IoT, hardware integration, pcb design, application development, and web development, 
              with a strong background in R&D environments. Skilled in ESP-IDF, MCUXpresso, STM32Cube (HAL/LL), 
              Microchip ASF, MicroPython, and modern software frameworks. Passionate about solving complex engineering problems, 
              optimizing system performance, and delivering high-quality hardware and software solutions.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#portfolio">
                View Portfolio
                <span>↘</span>
              </a>
              <a className="secondary-button" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-card art-card-main">
              <div className="art-card-top">
                <span>Portfolio</span>
                <span className="status-dot" />
              </div>
              <div className="art-grid">
                <div className="art-tile pcb-tile">
                  <span>PCB</span>
                  <div className="chip" />
                </div>
                <div className="art-tile code-tile">
                  <span>&lt;/&gt;</span>
                  <div className="code-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>
            </div>
            <span className="orb orb-one" />
            <span className="orb orb-two" />
          </div>
        </section>

        <section className="portfolio-section" id="portfolio">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Portfolio</span>
              <h2>Software & Hardware</h2>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                
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

                <div className="project-content">
                  <span className="project-type">
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-footer">
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

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
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Have a project in mind?</h2>
            <p>
              Feel free to reach out about software development, PCB design,
              embedded systems or IoT projects.
            </p>
          </div>

          <a className="contact-button" href="mailto:your-email@example.com">
            your-email@example.com
            <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 S-Salam</span>
        <span>React + TypeScript</span>
      </footer>
    </div>
  )
}

export default App
