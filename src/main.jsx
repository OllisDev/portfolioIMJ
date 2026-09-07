import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index.jsx";
import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import "./assets/css/header.css";
import "./assets/css/footer.css";
import "./assets/css/dialogueBox.css";
import "./assets/css/determination.css";
import "./assets/css/pipe.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/proyectos" element={<Projects />}></Route>
        <Route path="/sobre-mi" element={<AboutMe />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
