import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Login.css";

function Login() {
  return (
    <div className="login">
      <h3>Log in</h3>

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
      <div className="btn-class">
        <button className="btn btn-dark btn-lg btn-block button1">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Login;
