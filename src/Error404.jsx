import Header from "./components/Header";
import imgError from "./assets/img/error404.svg";
import "./assets/css/error404.css";

function Error404() {
  return (
    <>
      <Header />

      <div className="error-404-container">
        <img src={imgError} alt="Página no encontrada"></img>
        <h1>ERROR 404</h1>
        <span>No se ha encontrado esa página</span>
      </div>
    </>
  );
}

export default Error404;
