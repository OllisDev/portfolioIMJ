function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{project.title}</h2>

        <p className="modal-description">{project.description}</p>

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
        </div>
      </div>
    </div>
  );
}
export default ProjectModal;
