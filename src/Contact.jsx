import Header from "./components/Header";
import "./assets/css/contact.css";
import GitHubIcon from "./assets/img/github_icon.svg";
import EmailIcon from "./assets/img/mail_icon.svg";
import LinkedInIcon from "./assets/img/linkedin_icon.svg";

function Contact() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-panel">
          <p className="contact-label">LEVEL UP</p>
          <h1 className="contact-title">CONTACTO</h1>

          <p className="contact-text">
            Estoy buscando oportunidades como desarrollador junior Full-Stack
            para seguir creciendo y aportar valor en proyectos reales. Si te
            interesa colaborar, hablar de un proyecto u ofrecerme una
            oportunidad, estaré encantado de conectar contigo.
          </p>

          <section className="contact-list">
            <a
              className="contact-card"
              href="mailto:imagrojuarez@gmail.com"
              aria-label="Enviar un correo a imagrojuarez@gmail.com"
            >
              <div className="contact-icon-wrap">
                <img src={EmailIcon} alt="Email" className="contact-icon" />
              </div>
              <span className="contact-link">imagrojuarez@gmail.com</span>
            </a>

            <a
              className="contact-card"
              href="https://github.com/OllisDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de GitHub de Iker"
            >
              <div className="contact-icon-wrap">
                <img src={GitHubIcon} alt="GitHub" className="contact-icon" />
              </div>
              <span className="contact-link">github.com/OllisDev</span>
            </a>

            <a
              className="contact-card"
              href="https://www.linkedin.com/in/iker-magro-ju%C3%A1rez-641602341/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de LinkedIn de Iker"
            >
              <div className="contact-icon-wrap">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="contact-icon"
                />
              </div>
              <span className="contact-link">Iker Magro Juárez</span>
            </a>
          </section>
        </section>
      </main>
    </>
  );
}

export default Contact;
