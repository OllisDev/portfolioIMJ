function Header() {
  return (
    <div className="header-container">
      <header>
        <nav>
          <ul>
            <li>
              <img
                src="src/assets/img/block.svg"
                alt="Bloque"
                className="img-block"
              ></img>
              <a href="#">Inicio</a>
            </li>

            <li>
              <img
                src="src/assets/img/block.svg"
                alt="Bloque"
                className="img-block"
              ></img>
              <a href="#">Proyectos</a>
            </li>

            <li>
              <img
                src="src/assets/img/block.svg"
                alt="Bloque"
                className="img-block"
              ></img>
              <a href="#">Sobre mí</a>
            </li>

            <li>
              <img
                src="src/assets/img/block.svg"
                alt="Bloque"
                className="img-block"
              ></img>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;
