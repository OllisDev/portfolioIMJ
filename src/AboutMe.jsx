import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/css/aboutMe.css";
import avatar from "./assets/img/Iker_Magro_Juarez.jpeg";

function AboutMe() {
  return (
    <>
      <Header />

      <main className="trainer-page">
        <section className="trainer-card">
          <div className="trainer-header">
            <div className="trainer-avatar">
              <img src={avatar} alt="Iker Magro Juárez"></img>
            </div>

            <div>
              <p className="trainer-label">FICHA DE ENTRENADOR</p>
              <h1>Iker Magro Juárez</h1>
              <p className="trainer-class">Desarrollador Junior Full-Stack</p>
            </div>
          </div>

          <div className="trainer-info">
            <p>
              <strong>REGIÓN:</strong> Valdemoro, España
            </p>
            <p>
              <strong>NIVEL:</strong> Junior
            </p>
            <p>
              <strong>ESTADO:</strong> Disponible
            </p>
            <p>
              <strong>TIPO:</strong> Frontend / Backend
            </p>
          </div>

          <section className="trainer-section">
            <h2>PERFIL</h2>
            <p>
              Soy{" "}
              <b>
                Técnico Superior en Desarrollo de Aplicaciones Multiplataforma
              </b>{" "}
              y <b>Técnico Superior en Desarrollo de Aplicaciones Web</b>.
            </p>

            <p>
              Me interesa especialmente el desarrollo backend y la creación de
              APIs, aunque también disfruto trabajando en la parte frontend para
              construir aplicaciones completas, funcionales y fáciles de
              utilizar.
            </p>

            <p>
              Me considero una persona curiosa, responsable y constante. Me
              gusta aprender nuevas tecnologías y afrontar los problemas como
              oportunidades para mejorar mis conocimientos.
            </p>

            <p>
              En el ámbito personal, me gustan los videojuegos y me gustaría
              explorar en el futuro el desarrollo de videojuegos.
            </p>
          </section>

          <section className="trainer-section">
            <h2>HABILIDADES</h2>

            <div className="skill-list">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>PHP</span>
              <span>Laravel</span>
              <span>Python</span>
              <span>Streamlit</span>
              <span>Flask</span>
              <span>API RESTful</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>MySQL</span>
              <span>MySQL Workbench</span>
              <span>Docker</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Draw.io</span>
              <span>Figma</span>
            </div>
          </section>

          <section className="trainer-section">
            <h2>PRÓXIMO OBJETIVO</h2>
            <p>
              Conseguir una oportunidad como desarrollador Junior para seguir
              creciendo y participar en proyectos profesionales.
            </p>
          </section>

          <div className="trainer-actions">
            <a
              href="/doc/Curriculum_Iker_Magro_Juárez.pdf"
              className="trainer-button"
            >
              Ver CV
            </a>
            <a
              href="https://www.linkedin.com/in/iker-magro-ju%C3%A1rez-641602341/"
              target="_blank"
              rel="noopener noreferrer"
              className="trainer-button"
            >
              Ver LinkedIn
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutMe;
