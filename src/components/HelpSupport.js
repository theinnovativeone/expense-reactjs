import React from 'react';
import {Link} from "react-router-dom";

class App extends React.Component{
    render(){
        return(
            <div className='highlights'>
                <h2 className="highlighhead">Help.</h2>
                <h4>About us.</h4>
                <hr width='20px' color='black'/>
                <div style={{textAlign:'justify',maxWidth:400}}>
                    <b> &copy; 2021 Sneha Gupta.</b> App v1.2<br/>
                    I am a CSE fourth year (2018-2022) student at BPS Mahila Vishwavidyalaya. I created this application using ReactJS for my 7<sup>th</sup> semester project. I hope you liked it.<br/>
                    In case you have any doubts or are unable to use this app, please feel free to reach me out at <a href="mailto:guptasneha2099@gmail.com">guptasneha2099[at]gmail[dot]com</a>.
                    <br/><br/>
                    This App works totally offline. The user just needs to first load the app, install it to the Homescreen by clicking on "Add to Homescreen" prompt or via the three dot menu on any modern mobile browser.
                    Then, the user can add expenses, change budget or even view statistics without an internet connection.
                </div>
                <hr width='20px' color='black'/><br/>
                <Link to='/Dashboard' className="homelink">&#8617; Back to Home</Link>
            </div>
        )
    }
}
export default App;