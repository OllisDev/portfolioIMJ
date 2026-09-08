function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const tech = project.technologies || {};

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{project.title}</h2>

        <p className="modal-description">{project.description}</p>

        <section className="modal-section">
          <h3>Objetivo</h3>
          <p>{project.objective}</p>
        </section>

        <section className="modal-section">
          <h3>¿Para quién va dirigido?</h3>
          <p>{project.target}</p>
        </section>

        <section className="modal-section">
          <h3>Tecnologías</h3>
          <ul>
            {tech.programming_language && (
              <li>
                <strong>Lenguajes:</strong>{" "}
                {tech.programming_language.join(", ")}
              </li>
            )}
            {tech.frameworks && (
              <li>
                <strong>Frameworks:</strong> {tech.frameworks.join(", ")}
              </li>
            )}
            {tech.tools && (
              <li>
                <strong>Herramientas:</strong> {tech.tools.join(", ")}
              </li>
            )}
          </ul>
        </section>

        <section className="modal-section">
          <h3>Problemas que surgieron</h3>
          <ul>
            {project.problems.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </section>

        <section className="modal-section">
          <h3>Resultado / Aprendizaje</h3>
          <p>{project.result}</p>
        </section>

        {project.demoVideo && (
          <div className="modal-video">
            <video controls autoPlay loop muted className="demo-video">
              <source src={project.demoVideo} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
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
              href={`/${project.documentation}`}
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
