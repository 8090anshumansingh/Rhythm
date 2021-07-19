import React from "react";
import "../../styles/register.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Register() {
  return (
    <div className="register">
      <h3>Register</h3>

      <div className="form-group form1">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group form1">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="form-group form1">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group form1">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="btn-class">
        <button className="btn btn-dark btn-lg btn-block button1">
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
