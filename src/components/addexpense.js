import React from "react";
import './Style.css';
import {Link} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            displayCat:'block',
            displayVal:'none'
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        this.setState(({displayCat})=>({
            displayCat:'none'
        }));
        this.setState(({displayVal})=>({
            displayVal:'block'
        }));
      }
      render(){
        return (
            <div className="add-expense-app">
                <div className='selectcat' style={{display:this.state.displayCat}}>
                    <div className="heading">
                        Add Expense.
                        <br/><br/>
                    </div>
                    <b>Select Category</b>
                    <div className="categories">
                        <select className="list">
                            <option value="edu">Education</option>
                            <option value="edu">Fuel Bill</option>
                            <option value="edu">Grocery</option>
                            <option value="edu">Shopping</option>
                            <option value="edu">House Rent</option>
                            <option value="edu">Newspaper</option>
                            <option value="edu">Medicine</option>
                            <option value="edu">Mobile Bill</option>
                            <option value="edu">Electricity Bill</option>
                            <option value="edu">TV Bill</option>
                            <option value="edu">Misc</option>
                        </select>
                    <br/><br/>
                    <b>Enter Amount</b>
                    </div>
                    
                Rs. <input type="number" className="costinput" />

                    <Link to="/Dashboard">
                        <button className="movenext">Confirm</button>
                    </Link>
                    
                </div>
                
            </div>
        )
      }
}
export default App