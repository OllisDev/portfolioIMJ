import pipeImg from "../assets/img/pipe_mario.svg";

function Pipe() {
  const projects = [
    {
      id: 1,
      title: "PixelCoinsLauncher",
      description:
        "Aplicación de escritorio enfocada en la gestión personalizada de colecciones de videojuegos, orientada a mejorar la experiencia del usuario mediante la gamificación.Desarrollado en JavaFX (Java).",
      url: "https://github.com/OllisDev/OllisProyect-JavaFX",
      img: pipeImg,
    },
    {
      id: 2,
      title: "ConectaFP",
      description:
        "Plataforma web diseñada para conectar a estudiantes de Formación Profesional con empresas y centros educativos, facilitando la búsqueda de prácticas y empleo. Desarrollado en Laravel (PHP).",
      url: "https://github.com/OllisDev/conectaFP",
      img: pipeImg,
    },
  ];
  return (
    <div className="pipe-container">
      <div className="warp-title">
        <h1>¡BIENVENIDO AL PROJECT ZONE!</h1>
      </div>

      <div className="warp-pipe">
        {projects.map((p) => (
          <div key={p.id} className="pipe">
            <h2>{p.title}</h2>
            <button type="button">
              <img src={p.img} alt="Tubería" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Pipe;
