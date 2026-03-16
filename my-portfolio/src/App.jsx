import './App.css'
import Navbar from './nav.jsx'
import ProjectsGrid from './ProjectsGrid.jsx'
import AwardsTimeline from './AwardsTimeline.jsx'
import AcademicTimeline from './AcademicTimeline.jsx'
import Volunteer from './Volunteer.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="eyebrow">App Developer - Tech Enthusiast</p>
              <h1 className="hero__title">
                Hello, I'm Raditya!
              </h1>
              <p className="hero__lead">
                Making life easier with technology, one app at a time.
              </p>
              <div className="hero__actions">
                <a className="btn primary" href="#projects">View Projects</a>
                {/* <a className="btn ghost" href="#contact">Let’s Talk</a> */}
              </div>
              {/* <div className="hero__meta">
                <div className="meta-card">
                  <span className="meta-label">Focus</span>
                  <span className="meta-value">Brand systems & UI</span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">Based In</span>
                  <span className="meta-value">Jakarta, ID</span>
                </div>
                <div className="meta-card">
                  <span className="meta-label">Open For</span>
                  <span className="meta-value">Freelance · Full-time</span>
                </div>
              </div> */}
            </div>

            {/* <div className="hero__visual">
              <div className="hero__panel">
                <p className="panel-title">Latest Launch</p>
                <h3 className="panel-headline">Aurora Studio</h3>
                <p className="panel-copy">
                  A calming finance dashboard for ambitious creators, designed
                  with motion-first components and a frictionless UX.
                </p>
                <div className="chip-row">
                  <span className="chip">Design System</span>
                  <span className="chip">React</span>
                  <span className="chip">Motion</span>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about__inner">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="section-title">Creating tech for my community, shipped with love.</h2>
            </div>
            <p className="about__copy">
              Hi, I'm Raditya. an app developer and Computing A-Level Graduate from Victoria Junior College.
              I love making different applications, weird projects, and repairing tech.
            </p>
          </div>
        </section>

        <AcademicTimeline />

        <ProjectsGrid />
        <AwardsTimeline />
        <Volunteer />

        <section className="contact" id="contact">
          <div className="container contact__inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Let's connect!</h2>
            </div>
            <div className="contact__actions">
              <a className="btn primary" href="mailto:hello@example.com">hello@example.com</a>
              <a className="btn ghost" href="#projects">See work</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
