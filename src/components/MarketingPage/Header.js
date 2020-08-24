import React from "react";
import { Link as SmothLink } from "react-scroll";

const Header = () => {
  return (
    <header className="Header" id="top">
      <div className="Header-wrapper">
        <h1>en gift solar puedes obtener mas por menos</h1>
        <p>
          Ofrecemos 3 exelentes paquetes donde incluye un extra para su salud,
          convenientes y muy accesibles donde podra obtener un prestamo personal
          si lo califica
        </p>
        <SmothLink to="paquetes" smooth={true} duration={1000}>
          leer mas
        </SmothLink>
      </div>
    </header>
  );
};

export default Header;
