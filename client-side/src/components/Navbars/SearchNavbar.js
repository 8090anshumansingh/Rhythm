import React from "react";
import "../../styles/searchNavbar.css";
import { Link, useHistory } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function SearchNavbar() {
  const history = useHistory();
  const logoClickHandler = () => {
    history.push("/");
  };
  return (
    <div className="searchNavbar">
      <nav className="navbar navbar-expand-lg navbar-light navbar1">
        <div className="container ">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <h1 className="navbar-heading" onClick={logoClickHandler}>
              Rhythm
            </h1>

            <ul className="navbar-nav ulc ">
              <li className="nav-item">
                <div className="navbar-icons">
                  <FavoriteIcon style={{ color: "#1DB954" }} />
                </div>
                <Link
                  className="nav-link"
                  to={"/login"}
                  style={{ color: "white" }}
                >
                  Liked Songs
                </Link>
              </li>
              <li className="nav-item">
                <div className="navbar-icons">
                  {" "}
                  <ChatIcon style={{ color: "white" }} />
                </div>
                <Link
                  className="nav-link"
                  to={"/login"}
                  style={{ color: "white" }}
                >
                  Chat
                </Link>
              </li>
              <li className="nav-item">
                <div className="navbar-icons">
                  {" "}
                  <AccountCircleIcon style={{ color: "white" }} />
                </div>
                <Link className="nav-link" to={"/"} style={{ color: "white" }}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <div className="navbar-icons">
                  {" "}
                  <ExitToAppIcon style={{ color: "white" }} />
                </div>
                <Link className="nav-link" to={"/"} style={{ color: "white" }}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SearchNavbar;
