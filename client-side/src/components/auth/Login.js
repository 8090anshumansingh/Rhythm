import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Login.css";
import axios from "../../axios.js";
import { useState } from "react";
import Navbar from "../Navbars/Navbar.js";
import { useHistory } from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import p8 from "../../assets/p8.jpg";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };


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
      setOpen(!open);
      const res = await axios.post("/user/login", user);
      setUser({
        email: "",
        password: "",
      });
        console.log(res.data);
       

      if (res.data.msg === "login") {
        setIsValid(true);
        history.push("/search/"+res.data.data._id);
      }
     
      else{
        setMsg(res.data);
        setOpen(false);
        setIsValid(false);
       
      }
    
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

  var sectionStyle = {
   
      backgroundImage: "url(" + p8 + ")",
    height: "100%",

  
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    
  
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="login" style={sectionStyle}>
        <div className="outer" >
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
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
