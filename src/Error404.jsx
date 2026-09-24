import Header from "./components/Header";
import imgError from "./assets/img/error404.svg";
import "./assets/css/error404.css";
import { Link } from "react-router-dom";

/**
 * Componente principal de la página de Error 404
 *
 * @returns {JSX.Element}
 */
function Error404() {
  return (
    <>
      <Header />

      <div className="error-404-container">
        <img src={imgError} alt="Página no encontrada"></img>
        <h1>ERROR 404</h1>
        <span>Página no encontrada</span>
        <a>
          <Link to="/">Pulsa aquí para volver al Inicio</Link>
        </a>
      </div>
    </>
  );
}

export default Error404;
