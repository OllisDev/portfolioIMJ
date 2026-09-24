import Footer from "./components/Footer";
import Header from "./components/Header";
import DialogueBox from "./components/DialogueBox";
import Determination from "./components/Determination";
import { useState, useRef, useEffect } from "react";

// texto inicial que aparece en la caja de diálogo
const defaultDialogueText =
  "* Iker Magro Juárez aparece. \n* Es un desarrollador Junior Full-Stack. \n* Parece tener conocimientos de Java, Python, PHP, HTML, CSS y JavaScript... \n* ¿Quieres ver sus proyectos?";

/**
 * Componente principal de la página de Inicio
 * @returns {JSX.Element} Estructura de la página de inicio
 */
function Index() {
  const [dialogueText, setDialogueText] = useState(defaultDialogueText);
  const [autoStart, setAutoStart] = useState(false);
  const timeoutRef = useRef(null);

  /**
   * limpia el temporizador al desmontar el componente
   *
   * @returns {void}
   */
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  /**
   * Muestra un nuevo mensaje y recupera el texto inicial
   *
   * @param {string} message Mensaje que se mostrará en el diálogo
   * @returns {void}
   */
  const handleDeterminationClick = (message) => {
    setDialogueText(message);
    setAutoStart(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDialogueText(defaultDialogueText);
      setAutoStart(false);
    }, 10000);
  };

  return (
    <>
      <main className="home-page">
        <Header />
        <DialogueBox
          key={dialogueText}
          text={dialogueText}
          speed={50}
          showOptionsButtons={!autoStart}
          autoStart={autoStart}
        />
        <Determination onDeterminationClick={handleDeterminationClick} />
        <Footer />
      </main>
    </>
  );
}

export default Index;
