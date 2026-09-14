import iconLinkedin from "../assets/img/linkedin_icon.svg";
import iconGithub from "../assets/img/github_icon.svg";
import iconPhone from "../assets/img/phone_icon.svg";
import iconMail from "../assets/img/mail_icon.svg";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="site-footer">
        <div className="footer-brand">
          <nav className="social-icons">
            <a href="https://www.linkedin.com/in/iker-magro-ju%C3%A1rez-641602341/">
              <img
                src={iconLinkedin}
                alt="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              ></img>
            </a>

            <a href="https://github.com/OllisDev">
              <img
                src={iconGithub}
                alt="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              ></img>
            </a>
          </nav>
        </div>

        <div className="footer-contact">
          <div className="contact-phone">
            <img
              src={iconPhone}
              alt="Telefono"
              target="_blank"
              rel="noopener noreferrer"
            ></img>
            <p>661 15 39 89</p>
          </div>

          <div className="contact-mail">
            <img
              src={iconMail}
              alt="Correo Electrónico"
              target="_blank"
              rel="noopener noreferrer"
            ></img>
            <p>imagrojuarez@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
