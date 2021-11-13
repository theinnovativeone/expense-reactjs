import React from "react";
import './Style.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

function App(props) {
    return (
        <div className="DashApp">
            <br/>
            <ul className="ul">
                <li className='l'><hr width='0.1px' /></li>
                <li className='li'><hr width='0.1px' /></li>
                <li className='lii'><hr width='0.1px' /></li>
            </ul>
            <div className="head">
                Your total balance
            </div>
            <div className="money-value"><FontAwesomeIcon className='fafa' icon={faRupeeSign} /> 7,540.00</div>
            <div className="budget-overview">Total Budget
                <span className="figure"><br/>
                <FontAwesomeIcon className='fafa' icon={faRupeeSign} /></span>
            </div>
            <div className="expense-overview">Total Expenses
                <span className="figure"><br/>
                <FontAwesomeIcon className='fafa' icon={faRupeeSign} /></span>
            </div>
            <div className="graph">"Graph Here"
            </div>
            <div className="past-transactions">
                <div className="extra"></div>
                <div className="heading">Last Transactions</div>
                <ul className="transactions">
                    <li>Spotify 
                        <span class="money"></span>
                        <p className="Date"></p> 
                    </li>
                </ul>
            </div>
            <Link className="Link" to="/addexpense">
                <button className="add-button">+</button>
            </Link>
        </div>
    );
}

export default App;