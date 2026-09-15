import { useState } from "react";
import pipeImg from "../assets/img/pipe_mario.svg";
import projectsData from "../data/projects.json";
import pipeSoundFile from "../assets/sounds/mario_pipe.mp3";
import ProjectModal from "./ProjectModal";
import "../assets/css/projectModal.css";

const playPipeSound = () => {
  const audio = new Audio(pipeSoundFile);
  audio.volume = 0.5;
  audio.play();
};

const projects = projectsData;

function Pipe() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePipeClick = (project) => {
    playPipeSound();
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
