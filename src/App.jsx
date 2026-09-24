import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./Index.jsx";
import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Error404 from "./Error404.jsx";
import "./assets/css/header.css";
import "./assets/css/footer.css";
import "./assets/css/dialogueBox.css";
import "./assets/css/determination.css";
import "./assets/css/pipe.css";

/**
 * Funcionalidad para actuailizar en cada página del portfolio el título
 * @param {string} title Título
 * @param {string} description Descripción
 * @returns {null}
 */
function UpdateMeta({ title, description }) {
  React.useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
  }, [title, description]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UpdateMeta
                title="Iker Magro Juárez | Desarrollador Full-Stack Junior"
                description="Portfolio personal de Iker Magro Juárez. Desarrollo web, APIs, backend y frontend con Java, Spring Boot, PHP, Laravel, Python y React."
              />
              <Index />
            </>
          }
        />
        <Route
          path="/proyectos"
          element={
            <>
              <UpdateMeta
                title="Proyectos | Iker Magro Juárez"
                description="Mira los proyectos de Iker Magro Juárez: aplicaciones web, APIs, soluciones backend y frontend con tecnologías modernas."
              />
              <Projects />
            </>
          }
        />
        <Route
          path="/sobre-mi"
          element={
            <>
              <UpdateMeta
                title="Sobre mí | Iker Magro Juárez"
                description="Conoce el perfil de Iker Magro Juárez, desarrollador Full-Stack Junior con experiencia en Java, PHP, Python, React y bases de datos."
              />
              <AboutMe />
            </>
          }
        />
        <Route
          path="/contacto"
          element={
            <>
              <UpdateMeta
                title="Contacto | Iker Magro Juárez"
                description="Contacta con Iker Magro Juárez para proyectos, oportunidades laborales o colaboraciones en desarrollo web y software."
              />
              <Contact />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <UpdateMeta
                title="Página no encontrada | Iker Magro Juárez"
                description="La página que buscas no existe en el portfolio de Iker Magro Juárez."
              />
              <Error404 />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
