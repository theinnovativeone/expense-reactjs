import React, { PureComponent, Component } from "react";
import './Style.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    { name: 'Dec', amt: 2400 },
    { name: 'Jan', amt: 210  },
    { name: 'Feb', amt: 1590 },
    { name: 'Mar', amt: 2400 },
    { name: 'Apr', amt: 210  },
    { name: 'May', amt: 1590 },
    { name: 'Jun', amt: 2400 },
    { name: 'Jul', amt: 210  },
    { name: 'Aug', amt: 1590 }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            displayMenu:-800
        };
        this.handleMenuOpen = this.handleMenuOpen.bind(this);
      }
      handleMenuOpen() {
        this.setState(({displayMenu})=>({
            displayMenu:0
        }));
      }
      handleMenuClose() {
        this.setState(({displayMenu})=>({
            displayMenu:-800
        }));
      }
      render(){
        return (
            <div className="DashApp">
                <br/>
                <div className="menu" style={{right:this.state.displayMenu}}>
                    <div className="menuhead">Welcome, </div>
                    <div className="bodymenu">
                        Change Monthly Budget<br/><br/>
                        <span onClick={()=> this.handleMenuClose()} style={{cursor:'pointer'}}>Exit Menu</span>
                    </div>
                </div>
                <ul className="ul" onClick={()=> this.handleMenuOpen()}>
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
                <div className="graph">
                    <div className="prnt">
                        <h3>Recent Stats</h3> <h4><Link className="Link" to="/stats">View More</Link></h4>
                    </div>
                <ResponsiveContainer width="100%" height="85%">
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }} >
                    <XAxis stroke="#fff" dataKey="name" interval={'preserveStartEnd'}/>
                    <Tooltip />
                    <Line type="monotone" dataKey="amt"  activeDot={{ r: 6 }} stroke="#fff" yAxisId={1} />
                    </LineChart>
                </ResponsiveContainer>
                </div>
                <div className="past-transactions">
                    <div className="extra"></div>
                    <div className="heading">Last Transactions</div>
                    <ul className="transactions">
                        <li>Spotify 
                            <span className="money"></span>
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
}

export default App;