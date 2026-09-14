import iconLinkedin from "../assets/img/linkedin_icon.svg";
import iconGithub from "../assets/img/github_icon.svg";
import iconPhone from "../assets/img/phone_icon.svg";
import iconMail from "../assets/img/mail_icon.svg";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="site-footer">
        <div className="footer-brand" aria-label="Redes sociales">
          <nav className="social-icons">
            <a
              href="https://www.linkedin.com/in/iker-magro-ju%C3%A1rez-641602341/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Iker Magro Juárez"
            >
              <img src={iconLinkedin} alt="Linkedin" />
            </a>

            <a
              href="https://github.com/OllisDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Iker Magro Juárez"
            >
              <img src={iconGithub} alt="GitHub" />
            </a>
          </nav>
        </div>

        <div className="footer-contact">
          <a
            className="contact-phone"
            href="tel:+34661153989"
            aria-label="Llamar por teléfono"
          >
            <img src={iconPhone} alt="Teléfono" />
            <span>661 15 39 89</span>
          </a>

          <a
            className="contact-mail"
            href="mailto:imagrojuarez@gmail.com"
            aria-label="Enviar correo electrónico"
          >
            <img src={iconMail} alt="Correo electrónico" />
            <span>imagrojuarez@gmail.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
