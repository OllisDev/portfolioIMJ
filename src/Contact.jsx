import Header from "./components/Header";
import "./assets/css/contact.css";
import GitHub from "./assets/img/github_icon.svg";
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
            <div className="contact-card">
              <div className="contact-icon-wrap">
                <a href="mailto:imagrojuarez@gmail.com">
                  <img src={EmailIcon} alt="Email" className="contact-icon" />
                </a>
              </div>
              <a className="contact-link">imagrojuarez@gmail.com</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrap">
                <a
                  href="https://github.com/OllisDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GitHub} alt="GitHub" className="contact-icon" />
                </a>
              </div>
              <a className="contact-link">github.com/OllisDev</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrap">
                <a
                  href="https://www.linkedin.com/in/iker-magro-ju%C3%A1rez-641602341/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    className="contact-icon"
                  />
                </a>
              </div>
              <a className="contact-link">Iker Magro Juárez</a>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Contact;
