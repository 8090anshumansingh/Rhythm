import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <p>hsajkd</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
