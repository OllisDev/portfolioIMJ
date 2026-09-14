import saveSound from "../assets/sounds/undertale_save.mp3";
import gifDetermination from "../assets/img/determination.gif";

function Determination({ onDeterminationClick }) {
  const message =
    "* (Conocer que algún individuo está observando tu trabajo...\n* Te llena de DETERMINACIÓN.)";

  const playSaveSound = () => {
    const audio = new Audio(saveSound);
    audio.volume = 0.5;
    audio.play();
  };

  const handleClick = () => {
    playSaveSound();

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
        <img src={gifDetermination} className="determination-gif"></img>
      </button>
    </div>
  );
}
export default Determination;
