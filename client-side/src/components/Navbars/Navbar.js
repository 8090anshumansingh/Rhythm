import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar1">
        <div className="container ">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <h1>Rhythm</h1>
            <ul className="navbar-nav ulc ">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
