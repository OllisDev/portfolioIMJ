import { useState } from "react";
import pipeImg from "../assets/img/pipe_mario.svg";
import pipeSoundFile from "../assets/sounds/mario_pipe.mp3";
import ProjectModal from "./ProjectModal";
import "../assets/css/projectModal.css";

const playPipeSound = () => {
  const audio = new Audio(pipeSoundFile);
  audio.volume = 0.5;
  audio.play();
};

function Pipe() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "PixelCoinsLauncher",
      description:
        "Aplicación de escritorio enfocada en la gestión personalizada de colecciones de videojuegos, orientada a mejorar la experiencia del usuario mediante la gamificación.Desarrollado en JavaFX (Java).",
      url: "https://github.com/OllisDev/OllisProyect-JavaFX",
      img: pipeImg,
      demoVideo: "videos/demo_pixelcoins.mp4",
    },
    {
      id: 2,
      title: "ConectaFP",
      description:
        "Plataforma web diseñada para conectar a estudiantes de Formación Profesional con empresas y centros educativos, facilitando la búsqueda de prácticas y empleo. Desarrollado en Laravel (PHP).",
      url: "https://github.com/OllisDev/conectaFP",
      img: pipeImg,
      demoVideo: "videos/demo_conectafp.mp4",
    },
  ];

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
        <h1>¡BIENVENIDO AL PROJECT ZONE!</h1>
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
              <img src={p.img} alt="Tubería" />
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
