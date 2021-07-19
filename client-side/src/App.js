import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar1">
          <div className="container ">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <h1>Rhythm</h1>
              <ul className="navbar-nav ulc ">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Login"}>
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

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path="/Login" component={Login} />
              <Route path="/" component={Register} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
