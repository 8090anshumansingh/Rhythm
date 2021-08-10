import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/login.css";
import axios from "../../axios.js";
import { useState } from "react";
import Navbar from "../Navbars/Navbar.js";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [isValid, setIsValid] = useState(false);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = async () => {
    try {
      const res = await axios.post("/user/login", user);
      setUser({
        email: "",
        password: "",
      });
      console.log(res.data);
      if (res.data === "login") {
        history.push("/search");
      }
      setMsg(res.data);
      if (res.data === "login") {
        setIsValid(true);
      }
      // history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key

    if (e.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="login">
        <div className="outer">
          <div className="inner">
            <h3>Log in</h3>

            <div className="form-group form1">
              <label>Email</label>
              <input
                onKeyPress={handleKeypress}
                value={user.email}
                onChange={inputChangeHandler}
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group form1">
              <label>Password</label>
              <input
                onKeyPress={handleKeypress}
                value={user.password}
                onChange={inputChangeHandler}
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            {!isValid && (
              <div>
                <p style={{ color: "red" }}>{msg}</p>
              </div>
            )}
            <div className="btn-class">
              <button
                onKeyPress={handleKeypress}
                onClick={submitHandler}
                className="btn btn-dark btn-lg btn-block button1"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
