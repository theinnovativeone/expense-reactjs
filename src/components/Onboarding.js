import React from "react";
import './Style.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

function App(props) {
    return (
        <div className="Onboard-App">
            <p className="head">
                Welcome, 
            </p>
            <p className="body"> 
                Please set your <br/>monthly budget.
            </p>
            <FontAwesomeIcon className='fafa' icon={faRupeeSign} />
                <input type="number" className="budgetinput"/>
            
            <Link to="/Dashboard" className="buttonConfirm">
                Confirm
            </Link>
        </div>
    );
}

export default App;