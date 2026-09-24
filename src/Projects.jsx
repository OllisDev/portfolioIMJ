import Header from "./components/Header";
import Pipe from "./components/Pipe";

/**
 * Componente principal de la página de Proyectos
 *
 * @returns {JSX.Element}
 */
function Projects() {
  return (
    <>
      <div className="projects-page">
        <Header />
        <Pipe />
      </div>
    </>
  );
}
export default Projects;
