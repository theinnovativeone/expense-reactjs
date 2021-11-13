import React from "react";
import './Style.css';
import {Link} from "react-router-dom";

function App(props) {
    return (
        <div className="App">
            <p className="namehead">
                Enter your <br/>name.
                <input type="text" />
            </p>
            <Link to="/Onboarding" className="namebutton">
                Next
            </Link>
        </div>
    );
}

export default App;