import "./App.css";
import { useEffect } from "react";
import heroPhoto from "./assets/foto.jpg";
import Navbar from "./nav.jsx";
import ProjectsGrid from "./ProjectsGrid.jsx";
import AwardsTimeline from "./AwardsTimeline.jsx";
import AcademicTimeline from "./AcademicTimeline.jsx";
import Volunteer from "./Volunteer.jsx";
import Footer from "./Footer.jsx";

function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="container hero__inner">
            <div className="hero__media">
              <img className="hero__avatar" src={heroPhoto} alt="Raditya portrait" />
            </div>
            <div className="hero__content">
              <p className="eyebrow">App Developer - Tech Enthusiast</p>
              <h1 className="hero__title">
                Hello, I'm <span className="accent">Raditya</span>!
              </h1>
              <p className="hero__lead">
                Making life easier with technology, one app at a time.
              </p>
              <div className="hero__actions">
                <a className="btn accent-2" href="#projects">
                  View Projects
                </a>
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
            <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
              <span className="hero__chevron" aria-hidden="true">⌄</span>
            </a>

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
          <div className="section-head">
            <h1 className="section-kicker">About Me</h1>
            <p className="eyebrow">Know more about me</p>
          </div>

          <div className="container about__inner">
            <div className="about__left">
              <h2 className="section-title">
                Creating tech for my community, shipped with <span className="love-hover">love</span>.
              </h2>
            </div>
            <p className="about__copy">
              Hi, I'm Raditya. an app developer and Computing A-Level Graduate
              from Victoria Junior College. I love making different
              applications, weird projects, and repairing tech.
            </p>
            <br></br>
            <p className="about__copy">
              Below is where I've pursued my education in the past.
            </p>
          </div>
        </section>

        <AcademicTimeline />

        <ProjectsGrid />
        <AwardsTimeline />
        <Volunteer />

        {/* <section className="contact" id="contact">
          <div className="container contact__inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Let's connect!</h2>
            </div>
            <div className="contact__actions">
              <div className="socials">
                <a href="https://instagram.com" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://github.com" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <FaLinkedin />
                </a>
              </div>
              <a
                className="btn ghost"
                href="mailto:raditya.learner@gmail.com"
              >
                raditya.learner@gmail.com
              </a>
              
            </div>
          </div>
        </section> */}

        <Footer />
      </main>
    </div>
  );
}

export default App;
