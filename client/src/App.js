import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import MapPage from "./Pages/Map"

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" component = {Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Map" component = {MapPage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
