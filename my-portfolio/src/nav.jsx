import { FaDownload } from "react-icons/fa"

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="logo" href="#home">R</a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href='#awards'>Achievements</a>
          <a href='#volunteer'>Volunteer</a>
        </nav>
        <a className="btn small" href={`${import.meta.env.BASE_URL}cv.pdf`} download>
          <FaDownload aria-hidden="true" />
          Resume
        </a>
      </div>
    </header>
  )
}

export default Navbar
