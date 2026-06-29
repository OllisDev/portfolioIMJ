function Footer() {
  return (
    <div className="footer-container">
      <footer className="site-footer">
        <div className="footer-brand">
          <nav className="social-icons">
            <a href="https://www.linkedin.com/in/iker-magro-ju%C3%A1rez-641602341/">
              <img
                src="src/assets/img/linkedin_icon.svg"
                alt="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              ></img>
            </a>

            <a href="https://github.com/OllisDev">
              <img
                src="src/assets/img/github_icon.svg"
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
              src="src/assets/img/phone_icon.svg"
              alt="Telefono"
              target="_blank"
              rel="noopener noreferrer"
            ></img>
            <p>661 15 39 89</p>
          </div>

          <div className="contact-mail">
            <img
              src="src/assets/img/mail_icon.svg"
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
