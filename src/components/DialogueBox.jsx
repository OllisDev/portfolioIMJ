import { useState, useEffect, useRef } from "react";
import heartIcon from "../assets/img/undertale_heart.png";

function DialogueBox({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [responseDialogue, setResponseDialogue] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const audioContextRef = useRef(null);

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

  const playBlip = () => {
    const audioContext = audioContextRef.current;
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = "square";

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.05,
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
  };

  const playSelectSound = () => {
    const audioContext = audioContextRef.current;
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

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

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleOptionSelect = (option) => {
    playSelectSound();
    setShowOptions(false);

    if (option === 0) {
      setTimeout(() => {
        window.location.hash = "/proyectos";
      }, 300);
    } else {
      const responses = [
        "* Bueno... tal vez otro día entonces.",
        "* ¿En serio? Pero... pero son muy buenos proyectos...",
        "* Oh... entiendo. Estás ocupado explorando el portfolio.",
        "* Está bien. Siempre puedes volver cuando quieras.",
        "* El desarrollador está un poco decepcionado...\n* Pero lo entiende.",
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      setResponseDialogue(randomResponse);
      setShowResponse(true);

      setTimeout(() => {
        setShowResponse(false);
        setDisplayedText("");
        setCurrentIndex(0);
        setIsStarted(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (isStarted && currentIndex < text.length && !showResponse) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);

        if (text[currentIndex] !== " " && text[currentIndex] !== "\n") {
          playBlip();
        }

        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (
      currentIndex >= text.length &&
      isStarted &&
      !showOptions &&
      !showResponse
    ) {
      setTimeout(() => setShowOptions(true), 500);
    }
  }, [currentIndex, text, speed, isStarted, showOptions, showResponse]);

  useEffect(() => {
    if (!showOptions) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        playSelectSound();
        setSelectedOption((prev) => (prev === 0 ? 1 : 0));
      } else if (e.key === "Enter" || e.key === " ") {
        handleOptionSelect(selectedOption);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showOptions, selectedOption]);

  return (
    <div className="dialogue-box">
      <div className="dialogue-content">
        <div className="character-name">* Iker</div>

        {!isStarted ? (
          <button onClick={handleStart} className="start-dialogue-button">
            [ Presiona ENTER ]
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

            {showOptions && (
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
