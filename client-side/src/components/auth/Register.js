import React from "react";
import "../../styles/register.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "../../axios.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
      const res = await axios.post("/user/register", user);
      console.log(res.data);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="register">
      <h3>Register</h3>

      <div className="form-group form1">
        <label>First name</label>
        <input
          name="firstName"
          onChange={inputChangeHandler}
          type="text"
          className="form-control"
          placeholder="First name"
          value={user.firstName}
        />
      </div>

      <div className="form-group form1">
        <label>Last name</label>
        <input
          name="lastName"
          onChange={inputChangeHandler}
          type="text"
          className="form-control"
          placeholder="Last name"
          value={user.lastName}
        />
      </div>

      <div className="form-group form1">
        <label>Email</label>
        <input
          name="email"
          onChange={inputChangeHandler}
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={user.email}
        />
      </div>

      <div className="form-group form1">
        <label>Password</label>
        <input
          name="password"
          onChange={inputChangeHandler}
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={user.password}
        />
      </div>
      <div className="btn-class">
        <button
          onClick={submitHandler}
          className="btn btn-dark btn-lg btn-block button1"
        >
          Register
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered ? <a href="/Login">Log In</a>
      </p>
    </div>
  );
}

export default Register;
