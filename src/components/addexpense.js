import React, {useState} from "react";
import './Style.css';
import {Link} from "react-router-dom";

const App=()=>{
    const [EName, setEName]=useState('Education')
    const [cost, setCost]=useState(0)
    const transData=JSON.parse(localStorage.getItem('transData'))
    

    
        return (
            <div className="add-expense-app">
                <div className='selectcat'>
                    <div className="heading">
                        Add Expense.
                        <br/><br/>
                    </div>
                    <b>Select Category</b>
                    <div className="categories">
                        <select className="list" onChange={(e)=>setEName(e.target.value)}>
                            <option value="Education">Education</option>
                            <option value="Fuel Bill">Fuel Bill</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Shopping">Shopping</option>
                            <option value="House Rent">House Rent</option>
                            <option value="Newspaper">Newspaper</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Mobile Bill">Mobile Bill</option>
                            <option value="Electricity Bill">Electricity Bill</option>
                            <option value="TV Bill">TV Bill</option>
                            <option value="Misc">Misc</option>
                        </select>
                    <br/><br/>
                    <b>Enter Amount</b>
                    </div>
                    
                Rs. <input type="number" className="costinput" onChange={(e)=>setCost(Number(e.target.value))}/>

                    <Link to="/Dashboard">
                        <button className="movenext" onClick={()=>{transData.push([EName,cost]);
                            localStorage.setItem('transData',JSON.stringify(transData))
                            }}>Confirm</button>
                    </Link>
                    
                </div>
                
            </div>
        )
}
export default App