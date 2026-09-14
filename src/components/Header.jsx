import { Link } from "react-router-dom";
import imgBlock from "../assets/img/block.svg";

function Header() {
  return (
    <div className="header-container">
      <header>
        <nav>
          <ul>
            <li>
              <img src={imgBlock} alt="Bloque" className="img-block"></img>
              <Link to="/">Inicio</Link>
            </li>

            <li>
              <img src={imgBlock} alt="Bloque" className="img-block"></img>
              <Link to="/proyectos">Proyectos</Link>
            </li>

            <li>
              <img src={imgBlock} alt="Bloque" className="img-block"></img>
              <Link to="/sobre-mi">Sobre mí</Link>
            </li>

            <li>
              <img src={imgBlock} alt="Bloque" className="img-block"></img>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;
