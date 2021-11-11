import React from "react";
import logo from './logo.svg';
import './Style.css';
import {Link} from "react-router-dom";

function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Welcome to Expense Management App.
                </p>
                <Link to="/Home" className="App-button">
                    Get Started
                </Link>
            </header>
        </div>
    );
}

export default App;