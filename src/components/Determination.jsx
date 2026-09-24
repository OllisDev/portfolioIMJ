import saveSound from "../assets/sounds/undertale_save.mp3";
import gifDetermination from "../assets/img/determination.gif";

/**
 * Componente de la funcionalidad del botón de DETERMINACIÓN
 *
 * @param {any} props.onDeterminationClick Acción al hacer click al botón de DETERMINACIÓN para activar el mensaje personalizado
 * @returns {JSX.Element} Botón de DETERMINACIÓN
 */
function Determination({ onDeterminationClick }) {
  // mensaje personalizado que se activará al dar el botón de DETERMINACIÓN
  const message =
    "* (Conocer que algún individuo está observando tu trabajo...\n* Te llena de DETERMINACIÓN.)";

  // ejecuta y configura el audio al pulsar el botón
  const playSaveSound = () => {
    const audio = new Audio(saveSound);
    audio.volume = 0.5;
    audio.play();
  };

  // evento al hacer click en el botón para activar el audio y el mensaje personalizado
  const handleClick = () => {
    playSaveSound();

    {
      /* congelar medio segundo el envío del mensaje para sincronizar con la animación y el sonido */
    }
    setTimeout(() => {
      onDeterminationClick(message);
    }, 500);
  };

  return (
    <div className="determination-container">
      <button
        type="button"
        id="btnDetermination"
        className="button-determination"
        onClick={handleClick}
      >
        <img
          src={gifDetermination}
          className="determination-gif"
          alt="Mostrar mensaje de determinación"
        ></img>
      </button>
    </div>
  );
}
export default Determination;
