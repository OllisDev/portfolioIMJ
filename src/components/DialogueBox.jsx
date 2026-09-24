import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heartIcon from "../assets/img/undertale_heart.png";

/**
 * Componente de la funcionalidad del cuadro de diálogo de la pagina de Inicio
 *
 * Permite escribir el texto de manera progresiva, reproducir sonidos,
 * seleccionar opciones y navegar la página de proyectos
 *
 * @param {string} props.text Texto que mostrará en el diálogo
 * @param {number} [props.speed=50] Velocidad en milisegundos
 * @param {boolean} [props.showOptionsButtons] Indicación si se van a mostrar las opciones
 * @param {boolean} [props.autoStart=false] Indicación si el diálogo comienza automáticamente
 * @returns {JSX.Element} Cuadro de diálogo interactivo
 */
function DialogueBox({
  text,
  speed = 50,
  showOptionsButtons = true,
  autoStart = false,
}) {
  const navigate = useNavigate(); //navegar por otras rutas del portfolio

  // estados que manipulan el contenido y el comportamiento del diálogo
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(autoStart);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [responseDialogue, setResponseDialogue] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  // referencia al contexto de audio utilizado para los efectos de sonido
  const audioContextRef = useRef(null);

  /**
   * Inicializa el contexto de audio cuando se monta el componente
   * También lo cierra cuando el componente se desmonta
   */
  useEffect(() => {
    audioContextRef.current = new (
      window.AudioContext || window.webkitAudioContext
    )();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  /**
   * Reproduce un sonido corto cada vez que aparece un carácter
   */
  const playBlip = () => {
    const audioContext = audioContextRef.current;

    if (!audioContext) return; // no continua si el contexto de audio todavía no existe

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // conecta el oscilador con el destino del audio
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // configura el sonido tipo 8-bit
    oscillator.frequency.value = 800;
    oscillator.type = "square";

    // reduce de manera progresiva el volumen del sonido
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.05,
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
  };

  /**
   * Inicia el sonido utilizado al seleccionar una opción
   */
  const playSelectSound = () => {
    const audioContext = audioContextRef.current;
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // configura un sonido de selección más largo
    oscillator.frequency.value = 600;
    oscillator.type = "square";

    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.1,
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  /**
   * Inicia la escritura del texto del diálogo
   */
  const handleStart = () => {
    setIsStarted(true);
  };

  /**
   * Gestiona la opción seleccionada por el usuario
   *
   * @param {number} option Índice de la opción seleccionada
   */
  const handleOptionSelect = (option) => {
    playSelectSound();
    setShowOptions(false);

    if (option === 0) {
      // retrasa la navegación para permitir que se reproduzca el sonido
      setTimeout(() => {
        navigate("/proyectos");
      }, 300);
    } else {
      // respuestas cuando el usuario selecciona "No"
      const responses = [
        "* Bueno... tal vez otro día entonces.",
        "* ¿En serio? Pero... pero son muy buenos proyectos...",
        "* Oh... entiendo. Estás ocupado explorando el portfolio.",
        "* Está bien. Siempre puedes volver cuando quieras.",
        "* El desarrollador está un poco decepcionado...\n* Pero lo entiende.",
      ];

      // selecciona una respuesta de manera aleatoria
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      setResponseDialogue(randomResponse);
      setShowResponse(true);

      // reinicia el diálogo después de mostrar la respuesta
      setTimeout(() => {
        setShowResponse(false);
        setDisplayedText("");
        setCurrentIndex(0);
        setIsStarted(false);
      }, 3000);
    }
  };

  /**
   * Permite iniciar el diálogo pulsando la tecla Enter cuando todavía no ha comenzado
   */
  useEffect(() => {
    // solo se activa cuando el diálogo está detenido
    if (isStarted) return;

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleStart();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // elimina el evento cuando cambia el estado del diálogo
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isStarted]);

  /**
   * Escribe el texto de manera progresiva y reproduce un sonido
   * después de cada carácter, excepto espacios y saltos de línea
   */
  useEffect(() => {
    if (isStarted && currentIndex < text.length && !showResponse) {
      const timeout = setTimeout(() => {
        // añade el siguiente carácter al texto visible
        setDisplayedText((prev) => prev + text[currentIndex]);

        // reproduce el sonido únicamente para caracteres visibles
        if (text[currentIndex] !== " " && text[currentIndex] !== "\n") {
          playBlip();
        }

        // avanza a la siguiente posición del texto
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      // cancela el temporizador cuando cambia el efecto
      return () => clearTimeout(timeout);

      // muestra las opciones cuando termina la escritura del texto
    } else if (
      currentIndex >= text.length &&
      isStarted &&
      !showOptions &&
      !showResponse &&
      showOptionsButtons
    ) {
      setTimeout(() => setShowOptions(true), 500);
    }
  }, [
    currentIndex,
    text,
    speed,
    isStarted,
    showOptions,
    showResponse,
    showOptionsButtons,
  ]);

  /**
   * Permite controlar las opciones mediante el teclado.
   *
   * Las flechas cambian la opción seleccionada y Enter o
   * la barra espaciadora confirman la selección.
   */
  useEffect(() => {
    if (!showOptions) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        playSelectSound();

        // alterna entre las opciones "Si" y "No"
        setSelectedOption((prev) => (prev === 0 ? 1 : 0));
      } else if (e.key === "Enter" || e.key === " ") {
        handleOptionSelect(selectedOption);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // elimina el evento al ocultarse las opciones
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showOptions, selectedOption]);

  return (
    <div className="dialogue-box">
      <div className="dialogue-content">
        <div className="character-name">* Iker</div>

        {!isStarted ? (
          <button onClick={handleStart} className="start-dialogue-button">
            <span className="desktop-text">[ Presiona ENTER ]</span>
            <span className="mobile-text">[ Pulsa aquí ]</span>
          </button>
        ) : showResponse ? (
          <p className="dialogue-text">{responseDialogue}</p>
        ) : (
          <>
            <p className="dialogue-text">
              {displayedText}
              {currentIndex < text.length && (
                <span className="dialogue-cursor">▼</span>
              )}
            </p>

            {showOptions && showOptionsButtons && (
              <div className="dialogue-options">
                <button
                  className={`option-button ${selectedOption === 0 ? "selected" : ""}`}
                  onClick={() => handleOptionSelect(0)}
                  onMouseEnter={() => {
                    playSelectSound();
                    setSelectedOption(0);
                  }}
                >
                  {selectedOption === 0 && (
                    <img src={heartIcon} alt="♥" className="heart-icon" />
                  )}
                  Sí
                </button>
                <button
                  className={`option-button ${selectedOption === 1 ? "selected" : ""}`}
                  onClick={() => handleOptionSelect(1)}
                  onMouseEnter={() => {
                    playSelectSound();
                    setSelectedOption(1);
                  }}
                >
                  {selectedOption === 1 && (
                    <img src={heartIcon} alt="♥" className="heart-icon" />
                  )}
                  No
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default DialogueBox;
