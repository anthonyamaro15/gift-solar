import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../imgs/logo1.png";

const AdminNavbar = () => {
  const history = useHistory();

  const logout = () => {
    history.push("/");
    localStorage.clear();
  };

  return (
    <div>
      <div className="AdminNavbar">
        <div className="inner-wrapper">
          <Link to="top" className="logo">
            <img src={logo} alt="solar panel" />
            <span>gift solar</span>
          </Link>

          <nav>
            <button onClick={logout}>logout</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
