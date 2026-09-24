import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index.jsx";
import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Error404 from "./Error404.jsx";
import "./assets/css/header.css";
import "./assets/css/footer.css";
import "./assets/css/dialogueBox.css";
import "./assets/css/determination.css";
import "./assets/css/pipe.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Arranque de la aplicación React
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* RUTAS DEL PORFOLIO */}
      <Routes>
        {/* página de inicio */}
        <Route path="/" element={<Index />}></Route>

        {/* página de proyectos */}
        <Route path="/proyectos" element={<Projects />}></Route>

        {/* página de información personal */}
        <Route path="/sobre-mi" element={<AboutMe />}></Route>

        {/* página de contacto */}
        <Route path="/contacto" element={<Contact />}></Route>

        {/* página de que no existe esa página */}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
