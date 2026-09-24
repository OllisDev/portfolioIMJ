import { useEffect } from "react";

/**
 * Modal que muestra la información detallada de un proyecto
 *
 * Permite cerrar el modal haciendo clic fuera de su contenido,
 * pulsando el botón de cierre o presionando la tecla Escape
 *
 * @param {Object} props Propiedades del componente
 * @param {Object|null} props.project Proyecto que se mostrará
 * @param {boolean} props.isOpen Indica si el modal está abierto
 * @param {Function} props.onClose Función encargada de cerrar el modal
 * @returns {JSX.Element|null} Modal con los datos del proyecto
 */
function ProjectModal({ project, isOpen, onClose }) {
  /**
   * Escucha la tecla Escape mientras el modal está abierto
   */
  useEffect(() => {
    // no registra el evento si el modal está cerrado
    if (!isOpen) return;

    // cierra el modal al pulsar Escape
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // elimina el evento cuando el modal se cierra o se desmonta
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // no muestra nada si el modal está cerrado o no hay proyecto seleccionado
  if (!isOpen || !project) return null;

  // obtiene las tecnologías del proyecto o utiliza objetos vacíos
  const tech = project.technologies || {};

  // obtiene cada categoría tecnológica o utiliza arrays vacíos
  const languages = tech.programmingLanguage || [];
  const frameworks = tech.frameworks || [];
  const tools = tech.tools || [];

  // obtiene los problemas encontrados durante el proyecto
  const problems = project.problems || [];

  const videoSrc = `${import.meta.env.BASE_URL}${project.demoVideo}`;
  const docUrl = `${import.meta.env.BASE_URL}${project.documentation}`;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <header className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
        </header>

        <div className="modal-intro">
          <p className="modal-description">{project.description}</p>
        </div>

        <div className="modal-grid">
          <section className="modal-section">
            <h3>Objetivo</h3>
            <p>{project.objective}</p>
          </section>

          <section className="modal-section">
            <h3>¿Para quién va dirigido?</h3>
            <p>{project.target}</p>
          </section>
        </div>

        <section className="modal-section">
          <h3>Tecnologías</h3>
          <div className="modal-tech-list">
            {languages.length > 0 && (
              <div className="modal-tech-group">
                <span className="modal-tech-label">Lenguajes</span>
                <div className="modal-tags">
                  {languages.map((item, index) => (
                    <span key={index} className="modal-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {frameworks.length > 0 && (
              <div className="modal-tech-group">
                <span className="modal-tech-label">Frameworks</span>
                <div className="modal-tags">
                  {frameworks.map((item, index) => (
                    <span key={index} className="modal-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {tools.length > 0 && (
              <div className="modal-tech-group">
                <span className="modal-tech-label">Herramientas</span>
                <div className="modal-tags">
                  {tools.map((item, index) => (
                    <span key={index} className="modal-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="modal-section">
          <h3>Problemas que surgieron</h3>
          <ul>
            {problems.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </section>

        <section className="modal-section">
          <h3>Resultado / Aprendizaje</h3>
          <p>{project.result}</p>
        </section>

        {project.demoVideo && (
          <div className="modal-video-wrapper">
            <div className="modal-video">
              <video controls autoPlay loop muted className="demo-video">
                <source src={videoSrc} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </div>
        )}

        <div className="modal-actions">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-button"
          >
            Ver en GitHub
          </a>

          {project.documentation && (
            <a
              href={docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-button"
            >
              Ver documentación
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
