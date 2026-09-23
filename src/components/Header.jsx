import { useState } from "react";
import { Link } from "react-router-dom";
import imgBlock from "../assets/img/block.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="header-container">
      <header>
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav>
          <ul className={isOpen ? "is-open" : ""}>
            <li>
              <img src={imgBlock} alt="" className="img-block"></img>
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>

            <li>
              <img src={imgBlock} alt="" className="img-block"></img>
              <Link to="/proyectos" onClick={closeMenu}>
                Proyectos
              </Link>
            </li>

            <li>
              <img src={imgBlock} alt="" className="img-block"></img>
              <Link to="/sobre-mi" onClick={closeMenu}>
                Sobre mí
              </Link>
            </li>

            <li>
              <img src={imgBlock} alt="" className="img-block"></img>
              <Link to="/contacto" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;
