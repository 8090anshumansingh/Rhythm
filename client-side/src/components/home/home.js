import React, { useEffect, useRef } from "react";
import url from "../../assets/v6.mp4";
import "../../styles/home.css";
import Button from "react-bootstrap/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const myref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    console.log(myref.current);
    myref.current.play();
  }, []);

  const loginHandler = () => {
    history.push("/login");
  };
  const registerHandler = () => {
    history.push("/register");
  };

  return (
    <div className="home">
      <div className="video-container">
        <video autoplay muted loop id="myVideo" ref={myref}>
          <source src={url} type="video/mp4" />
        </video>
      </div>
      <div className="top">
        <h1 className="brandName">Rhythm</h1>
        <div className="buttons">
          <Button variant="dark" className="btn" onClick={loginHandler}>
            Login
          </Button>
          <Button variant="dark" className="btn" onClick={registerHandler}>
            Register
          </Button>
        </div>
      </div>
      <div className="content">
        <h1 className="heading">Music for every mood</h1>
        <p className="text">
          Listen to your favourite music and connect with the people who have
          same taste of music as you
        </p>
      </div>

      <div className="footer">
        <p className="footer-style">
          Made with <FavoriteIcon style={{ color: "green" }} /> by Anshuman
          Singh
        </p>
      </div>
    </div>
  );
}

export default Home;
