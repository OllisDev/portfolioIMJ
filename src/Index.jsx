import Footer from "./components/Footer";
import Header from "./components/Header";
import DialogueBox from "./components/DialogueBox";
import Determination from "./components/Determination";
import { useState, useRef, useEffect } from "react";

const defaultDialogueText =
  "* Iker Magro Juárez aparece. \n* Es un desarrollador Junior Full-Stack. \n* Parace tener conocimientos de Java, Python, PHP, HTML, CSS y JavaScript... \n* ¿Quieres ver sus proyectos?";

function Index() {
  const [dialogueText, setDialogueText] = useState(defaultDialogueText);
  const [autoStart, setAutoStart] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
      <Header />
      <DialogueBox
        key={dialogueText}
        text={dialogueText}
        speed={50}
        shoOptionsButtons={!autoStart}
        autoStart={autoStart}
      />
      <Determination onDeterminationClick={handleDeterminationClick} />
      <Footer />
    </>
  );
}

export default Index;
