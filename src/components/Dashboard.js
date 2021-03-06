import React from "react";
import './Style.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign, faMoneyBillAlt, faQuestionCircle,faMoneyCheckAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { BarChart, Bar, XAxis,YAxis, ResponsiveContainer } from 'recharts';

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
          var budgetv=localStorage.getItem('budget');
          var expv=0;
          var uname=localStorage.getItem('userName');
          const handlechange=(e)=>{
              budgetv=e.target.value;
              localStorage.setItem('budget',budgetv)
          }
          const transData=JSON.parse(localStorage.getItem('transData'));
        
        const data=[];
        for (var i in transData){
            expv=expv+transData[i][1]
            data.push({'name':transData[i][0],'amt':transData[i][1]})
        }
        var balv=budgetv-expv;
        
        return (
            <div className="DashApp">
                <br/>
                <div className="menu" style={{right:this.state.displayMenu}}>
                    <div className="menuhead">{uname}</div>
                    <div className="bodymenu">
                    <FontAwesomeIcon className='fafa' icon={faMoneyCheckAlt} /> &nbsp; Change Monthly Budget<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Current Budget: {budgetv}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<input className="changeBudget" type="number" placeholder='New Budget' onChange={(e)=>handlechange(e)} />
                        <br/><br/>
                        <Link to='/helpsupport' className='helpLink'><FontAwesomeIcon className='fafa' icon={faQuestionCircle} /> &nbsp; Help and Support</Link><br/>
                        <Link to='/addexpense' className='helpLink'><FontAwesomeIcon className='fafa' icon={faMoneyBillAlt} /> &nbsp; Add Expense</Link><br/>
                        <span onClick={()=> this.handleMenuClose()} style={{cursor:'pointer',lineHeight:'40px'}}>
                        <FontAwesomeIcon className='fafa' icon={faSignOutAlt} /> &nbsp; Exit Menu</span>

                    </div>
                </div>
                <ul className="ul" onClick={()=> this.handleMenuOpen()}>
                    <li className='l'><hr width='0.1px' /></li>
                    <li className='li'><hr width='0.1px' /></li>
                    <li className='lii'><hr width='0.1px' /></li>
                </ul>
                <div className="hiuser">Hi, {uname}</div>
                <div className="head">
                    Your total balance
                </div>
                <div className="money-value"><FontAwesomeIcon className='fafa' icon={faRupeeSign} /> {balv}</div>
                <div className="budget-overview">Total Budget
                    <span className="figure"><br/>
                    <FontAwesomeIcon className='fafa' icon={faRupeeSign} /></span> {budgetv}
                </div>
                <div className="expense-overview">Total Expenses
                    <span className="figure"><br/>
                    <FontAwesomeIcon className='fafa' icon={faRupeeSign} /></span> {expv}
                </div>
                <div className="graph">
                    <div className="prnt">
                        <h3>Recent Stats</h3> <h4><Link className="Link" to="/stats">View More</Link></h4>
                    </div>
                <ResponsiveContainer width="100%" height="85%">
                <BarChart width={140} data={data} height={40}>
                    <XAxis stroke="#fff" dataKey='name' interval={'preserveStartEnd'}/>
                    <YAxis type="number" stroke="#fff" />
                    <Bar type="monotone" dataKey='amt'  activeDot={{ r: 6 }} stroke="#fff" fill="#fff"/>
                </BarChart>
                    
                </ResponsiveContainer>
                </div>


        {/* Past Transactions Here*/}
                <div className="past-transactions">
                    <div className="extra"></div>
                    <div className="heading">Last Transactions</div>
                    <ul className="transactions">
                    {transData.map(tl => (
                    <li className="translist">{tl[0]} <span className="tvalue">- <FontAwesomeIcon className='fafa' icon={faRupeeSign} /> {tl[1]}</span></li>
                    ))}
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