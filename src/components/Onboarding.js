import React, {useState} from "react";
import './Style.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

const App=()=>{
    const [budget,setBudget]=useState();

    const handle=()=>{
        localStorage.setItem('budget',budget)
    }
    
    return (
        <div className="Onboard-App">
            <p className="head">
                Welcome, 
            </p>
            <p className="body"> 
                Please set your <br/>monthly budget.
            </p>
            <FontAwesomeIcon className='fafa' icon={faRupeeSign} />
                <input type="number" onChange={(e) => setBudget(e.target.value)} className="budgetinput"/>
            
            <Link to="/Dashboard" onclick={handle()} className="buttonConfirm">
                Confirm
            </Link>
        </div>
    );
}

export default App;