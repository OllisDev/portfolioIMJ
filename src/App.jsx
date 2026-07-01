import Footer from "./components/Footer";
import Header from "./components/Header";
import DialogueBox from "./components/DialogueBox";

function App() {
  const dialogueText =
    "* Iker Magro Juárez aparece. \n* Es un desarrollador fullstack. \n* Parace saber mucho de Java, PHP y React... \n* ¿Quieres ver sus proyectos?";
  return (
    <>
      <Header />
      <DialogueBox text={dialogueText} speed={50} />
      <Footer />
    </>
  );
}

export default App;
