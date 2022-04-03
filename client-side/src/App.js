import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import Search from "./components/search/search.js";
import Home from "./components/home/home.js";
import LikedList from "./components/lists/LikedList";
import Messenger from "./components/messenger/Messenger.js";
import Discover from "./components/discover/Discover.js";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/search/:userId" component={Search} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/likedlist/:userId" component={LikedList} />
          <Route exact path="/chat/:userId" component={Messenger} />
          <Route exact path="/discover/:userId" component={Discover} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
