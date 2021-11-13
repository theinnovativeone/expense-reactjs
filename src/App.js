import React from "react";
import './App.css';
import Dashboard from './components/Dashboard';
import NamePage from './components/NamePage';
import Onboarding from './components/Onboarding';
import First from './components/First';
import addexpense from './components/addexpense'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App(props){
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={First} />
          <Route exact path="/NamePage" component={NamePage} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Onboarding" component={Onboarding} />
          <Route exact path="/Addexpense" component={addexpense} />
        </Switch>
    </Router>
  );
}

export default App;