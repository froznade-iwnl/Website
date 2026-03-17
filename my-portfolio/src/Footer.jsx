import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom row */}
        <div className="footer__bottom">
          <div className="socials">
            <a className="socials__link socials__link--instagram" href="https://www.instagram.com/radityawahyudi_" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a className="socials__link socials__link--github" href="https://github.com/froznade-iwnl" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a className="socials__link socials__link--linkedin" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a className="socials__link socials__link--email" href="mailto:raditya.learner@gmail.com">
              <FaEnvelope />
            </a>
          </div>

          <div className="footer__copyright">
            <p>© {new Date().getFullYear()} Raditya Wahyudi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
