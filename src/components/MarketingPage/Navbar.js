import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../imgs/logo1.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="inner-wrapper">
        <Link to="/" className="logo">
          <img src={logo} alt="solar panel" />
          <span>gift solar</span>
        </Link>

        <nav>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" exact activeClassName="active">
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
