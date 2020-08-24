import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../imgs/logo1.png";
import { Link as SmothLink } from "react-scroll";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="inner-wrapper">
        <SmothLink to="top" className="logo" smooth={true} duration={1000}>
          <img src={logo} alt="solar panel" />
          <span>gift solar</span>
        </SmothLink>

        <nav>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" exact activeClassName="active">
            About
          </NavLink>
          <NavLink to="/contact" exact activeClassName="active">
            contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
