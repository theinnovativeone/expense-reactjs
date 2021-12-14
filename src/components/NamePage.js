import React, {useState} from "react";
import './Style.css';
import {Link} from "react-router-dom";

const App = ()=>{
    const [userName, setUserName] = useState('');
    const handle = () => {
        localStorage.setItem('userName', userName);
     };
    return (
        <div className="App">
            <p className="namehead">
                Enter your <br/>name.
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </p>
            <Link to="/Onboarding" onclick={handle()} className="namebutton">
                Next
            </Link>
        </div>
    )
}
export default App