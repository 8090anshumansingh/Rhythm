import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar1">
        <div className="container ">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           <Link to="/" style={{ textDecoration: 'none' }}><h1 style={{color:"white",fontFamily: "Patrick Hand",fontSize:"2.5rem",}}>Rhythm</h1></Link>
            <ul className="navbar-nav ulc ">
              <li className="nav-item">
                <Link style={{color:"white"}} className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{color:"white"}} className="nav-link" to={"/"}>
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
