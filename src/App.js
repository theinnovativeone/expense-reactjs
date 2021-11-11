import React from "react";
import './App.css';
import Home from './components/Home';
import First from './components/First';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


function App(props) {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={First} />
          <Route exact path="/Home" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;