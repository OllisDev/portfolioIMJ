import Footer from "./components/Footer";
import Header from "./components/Header";
import DialogueBox from "./components/DialogueBox";
import Determination from "./components/Determination";
import { useState } from "react";

function Index() {
  const [dialogueText, setDialogueText] = useState(
    "* Iker Magro Juárez aparece. \n* Es un desarrollador Junior Full-Stack. \n* Parace tener conocimientos de Java, Python, PHP, HTML, CSS y JavaScript... \n* ¿Quieres ver sus proyectos?",
  );

  const [autoStart, setAutoStart] = useState(false);

  const handleDeterminationClick = (message) => {
    setDialogueText(message);
    setAutoStart(true);

    setTimeout(() => {
      setDialogueText(dialogueText);
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
