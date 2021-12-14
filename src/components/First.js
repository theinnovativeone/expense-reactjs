import React from "react";
import logo from './logo.svg';
import './Style.css';
import {Link, Redirect} from "react-router-dom";

const App=()=> {    
    if (localStorage.getItem('userName')){
        return (
            <Redirect to='/Dashboard'/>
            )
    }
    else{
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="head">
                Manage your expenses easily.
                </p>
                <p className="body">
                    The best application for managing your expenses, track all transactions, add new ones.
                </p>
                <Link to="/NamePage" className="App-button">
                    Start
                </Link>
            </header>
        </div>
    )
}
}
export default App