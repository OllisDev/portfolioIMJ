import { useState } from "react";
import pipeImg from "../assets/img/pipe_mario.svg";
import projectsData from "../data/projects.json";
import pipeSoundFile from "../assets/sounds/mario_pipe.mp3";
import ProjectModal from "./ProjectModal";
import "../assets/css/projectModal.css";

/**
 * Reproduce el sonido de la tubería
 */
const playPipeSound = () => {
  const audio = new Audio(pipeSoundFile);
  audio.volume = 0.5;
  audio.play();
};

// lista de proyectos obtenida del archivo JSON
const projects = projectsData;

/**
 * Componente que muestra los proyectos disponibles mediante tuberías interactivas
 *
 * Al pulsar una tubería, se reproduce un sonido y se abre un modal con la información del proyecto seleccionado
 *
 * @returns {JSX.Element} Zona de proyectos con sus tuberías
 */
function Pipe() {
  const [selectedProject, setSelectedProject] = useState(null); // proyecto seleccionado actualmente
  const [isModalOpen, setIsModalOpen] = useState(false); // controla si el modal esta abierto o cerrado

  /**
   * Gestiona la selección de un proyecto.
   *
   * @param {Object} project Proyecto seleccionado
   */
  const handlePipeClick = (project) => {
    playPipeSound();
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  /**
   * Cierra el modal y elimina el proyecto seleccionado
   * después de finalizar la animación de cierre
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="pipe-container">
      <div className="warp-title">
        <p className="projects-eyebrow">¡BIENVENIDO AL PROJECT ZONE!</p>
        <h1>MIS PROYECTOS</h1>
        <p className="projects-description">
          Aplicaciones desarrolladas con Java, PHP, React y otras tecnologías
        </p>
        <p className="projects-indication">
          Pulsa una tubería para ver los detalles del proyecto seleccionado
        </p>
      </div>

      <div className="warp-pipe">
        {projects.map((p) => (
          <div key={p.id} className="pipe">
            <h2>{p.title}</h2>
            <button
              type="button"
              onClick={() => {
                handlePipeClick(p);
              }}
            >
              <img src={pipeImg} alt={p.title} />
            </button>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
export default Pipe;
