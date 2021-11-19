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
                        Select Category.
                    </div>
                    <div className="categories">
                        <img cat-name="Education" alt='cetegory pic' src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/344/external-education-university-courses-wanicon-lineal-color-wanicon.png" className="cat-edu"/>
                        <svg cat-name="Transport" className="cat-trans" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#455a64" d="M16 38c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V38zM38 38c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V38z"></path><path fill="#455a64" d="M26.3 4.5H31.700000000000003V6.5H26.3z" transform="rotate(-68.191 29.002 5.5)"></path><path fill="#455a64" d="M18 2.8H20V8.2H18z" transform="rotate(-21.801 19 5.5)"></path><path fill="#ff9800" d="M8 30v9c0 0 0 2 2 2s26 0 28 0 2-2 2-2v-9H8zM15 7h18v2H15V7z"></path><path fill="#fff8e1" d="M16 35.5c0 1.4-1.1 2.5-2.5 2.5S11 36.9 11 35.5s1.1-2.5 2.5-2.5S16 34.1 16 35.5zM37 35.5c0 1.4-1.1 2.5-2.5 2.5S32 36.9 32 35.5s1.1-2.5 2.5-2.5S37 34.1 37 35.5z"></path><path fill="#ffc107" d="M40,26.5c0,1.4,0,3.5,0,3.5H8c0,0,0-2.1,0-3.5v-15C8,10.1,9.1,9,10.5,9h27c1.4,0,2.5,1.1,2.5,2.5 V26.5z"></path><path fill="#9fa8da" d="M36.5,11h-25c-0.8,0-1.5,0.7-1.5,1.5v13c0,1.4,1.1,2.5,2.5,2.5h23c1.4,0,2.5-1.1,2.5-2.5v-13 C38,11.7,37.3,11,36.5,11z"></path><path fill="#263238" d="M38,17H10v-4.5c0-0.8,0.7-1.5,1.5-1.5h25c0.8,0,1.5,0.7,1.5,1.5V17z"></path><path fill="#64dd17" d="M12 13h11v2H12V13zM25 13h4v2h-4V13z"></path><path fill="#7986cb" d="M21 28h-8v-6.5c0-.8.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5V28zM35 28h-8v-6.5c0-.8.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5V28z"></path><path fill="#3949ab" d="M28.4,28c-0.3-0.3-0.4-0.6-0.4-1c0-1.1,1.4-2,3-2s3,0.9,3,2c0,0.4-0.2,0.7-0.4,1h2.3 c0.1-0.3,0.2-0.7,0.2-1c0-2.2-2.2-4-5-4s-5,1.8-5,4c0,0.3,0.1,0.7,0.2,1H28.4z"></path></svg>
                        <img cat-name="Fuel Bill" alt='cetegory pic' src="https://cdn-icons-png.flaticon.com/512/2933/2933939.png" className="cat-fuel" />
                        <img cat-name="Grocery" alt='cetegory pic' src="https://cdn-icons-png.flaticon.com/512/1261/1261163.png" className="cat-grocery" />
                        <svg cat-name="Shopping" className="cat-shop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#F57C00" d="M25.6 7.6H38.3V20.299999999999997H25.6z" transform="rotate(45.001 32 14)"></path><path fill="#FF9800" d="M15.9 4.9H30V19H15.9z" transform="rotate(45.001 23 12)"></path><path fill="#009688" d="M18,32c-1.1,0-2-0.9-2-2l0-10l-4,0l0,10c0,3.3,2.7,6,6,6h19v-4H18z"></path><path fill="#009688" d="M12.8,10l-0.4-1.3C11.8,7.1,10.3,6,8.6,6H5v4h3.6l5.5,16.6c0.3,0.8,1,1.4,1.9,1.4h19c0.8,0,1.5-0.5,1.8-1.2L44.4,10H12.8z"></path><path fill="#00695C" d="M5 6A2 2 0 1 0 5 10A2 2 0 1 0 5 6Z"></path><path fill="#37474F" d="M34 36A3 3 0 1 0 34 42 3 3 0 1 0 34 36zM19 36A3 3 0 1 0 19 42 3 3 0 1 0 19 36z"></path><g><path fill="#607D8B" d="M34 38A1 1 0 1 0 34 40 1 1 0 1 0 34 38zM19 38A1 1 0 1 0 19 40 1 1 0 1 0 19 38z"></path></g></svg>
                        <img cat-name="House Rent" alt='cetegory pic' src="https://cdn-icons-png.flaticon.com/512/602/602270.png" className="cat-shopping" />
                        <img cat-name="Newspaper" alt='cetegory pic' src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png" className="cat-news" />
                        <svg cat-name='Medecine' className='cat-med' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#3f51b5" d="M10,42h28c2.2,0,4-1.8,4-4V15.7c0-1.6-1-3.1-2.6-3.7L24,6L8.6,12C7,12.6,6,14.1,6,15.7V38 C6,40.2,7.8,42,10,42z"></path><path fill="#e91e63" d="M14.766,27.104c-2.309,2.309-2.36,6-0.115,8.246c2.245,2.244,5.936,2.193,8.246-0.116l5.168-5.169 l-8.129-8.13L14.766,27.104z"></path><path fill="#00bcd4" d="M33.35,16.651c-2.246-2.245-5.936-2.194-8.246,0.116l-5.169,5.169l8.129,8.129l5.168-5.169 C35.543,22.588,35.595,18.896,33.35,16.651z"></path><path fill="#00838f" d="M28.065,30.066l-8.13-8.13l0.813-0.813l8.13,8.13L28.065,30.066z"></path><path fill="#fce4ec" d="M21.044,23.044l-5.284,5.284c0,0-2.957,2.957,0,5.912c0.257,0.256,0.543,0.467,0.847,0.632 c-2.325-2.109,0.631-5.066,0.631-5.066l5.284-5.284L21.044,23.044z"></path><path fill="#e0f7fa" d="M28.176,18.868c0,0,2.587-2.586,4.804-0.37c-0.165-0.304-0.373-0.591-0.631-0.848 c-3.065-2.848-5.652-0.261-5.652-0.261l-5.653,5.654l1.478,1.478L28.176,18.868z"></path><path fill="#80deea" d="M22.522,24.522l-1.478-1.478l0.813-0.813l1.478,1.478L22.522,24.522z"></path></svg>
                        <svg cat-name="Mobile Bill" className="cat-mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#757575" d="M12,40V8c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"></path><path fill="#e3f2fd" d="M32,7H16c-0.6,0-1,0.4-1,1v29c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V8C33,7.4,32.6,7,32,7z"></path><path fill="#424242" d="M25.5,41c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5S25.5,40.2,25.5,41z"></path><path fill="#388e3c" d="M26.072,25.576c0-0.554-0.154-0.994-0.461-1.323c-0.307-0.327-0.828-0.63-1.565-0.906 c-0.736-0.277-1.371-0.553-1.905-0.825c-0.534-0.274-0.991-0.588-1.373-0.943c-0.381-0.354-0.678-0.772-0.892-1.251 c-0.212-0.479-0.319-1.051-0.319-1.712c0-1.142,0.365-2.077,1.094-2.806c0.729-0.729,1.699-1.155,2.908-1.277v-2.168h1.621v2.199 c1.196,0.169,2.131,0.667,2.806,1.495C28.663,16.885,29,17.957,29,19.275h-2.928c0-0.811-0.167-1.417-0.502-1.818 c-0.334-0.402-0.782-0.603-1.342-0.603c-0.554,0-0.983,0.157-1.287,0.471c-0.304,0.315-0.456,0.748-0.456,1.302 c0,0.514,0.149,0.925,0.446,1.236c0.297,0.311,0.85,0.628,1.657,0.952c0.807,0.324,1.471,0.63,1.99,0.917 c0.52,0.287,0.959,0.611,1.317,0.973c0.358,0.361,0.631,0.773,0.821,1.236C28.906,24.403,29,24.941,29,25.556 c0,1.148-0.358,2.08-1.074,2.796s-1.702,1.138-2.958,1.266v2.016h-1.611v-2.006c-1.385-0.149-2.457-0.64-3.217-1.474 C19.38,27.321,19,26.212,19,24.827h2.928c0,0.804,0.191,1.42,0.573,1.849c0.381,0.429,0.93,0.643,1.646,0.643 c0.595,0,1.064-0.157,1.408-0.472C25.9,26.534,26.072,26.11,26.072,25.576z"></path></svg>
                        <img cat-name="Electricity Bill" alt='cetegory pic' src="https://img.icons8.com/color/344/light.png" className="cat-elec" />
                        <svg cat-name="TV Bill" className="cat-tv" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#546E7A" d="M11.169 11H22.831000000000003V13H11.169z" transform="rotate(59.036 17 12)"></path><path fill="#546E7A" d="M22.5 8.55H24.5V18.448999999999998H22.5z" transform="rotate(45.001 23.5 13.5)"></path><path fill="#CFD8DC" d="M5 16H43V42H5z"></path><path fill="#37474F" d="M32,36c-0.27,0.993-1.014,1.676-2,2c0,0-4.5,1-9.5,1S11,38,11,38c-0.929-0.278-1.691-0.936-2-2c0,0-1-3-1-7s1-7,1-7c0.296-1.041,0.928-1.615,2-2c0,0,4.5-1,9.5-1s9.5,1,9.5,1c1.086,0.322,1.813,0.938,2,2c0,0,1,3,1,7S32,36,32,36z"></path><path fill="#FF1744" d="M38 20A2 2 0 1 0 38 24A2 2 0 1 0 38 20Z"></path><g><path fill="#90A4AE" d="M35.084 32H41V34H35.084zM35.084 28H41V30H35.084zM35.084 36H41V38H35.084z"></path></g></svg>
                        <svg cat-name="Misc" className="cat-misc"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#a5d6a7" d="M7 6H27V42H7z"></path><path fill="#81c784" d="M26,13h-1c-2.757,0-5,2.243-5,5v22c0,0.712,0.154,1.386,0.424,2H26V13z"></path><path fill="#388e3c" d="M6,5v38h22V5H6z M26,41H8V7h18V41z"></path><path fill="#388e3c" d="M17 10A2 2 0 1 0 17 14 2 2 0 1 0 17 10zM17 34A2 2 0 1 0 17 38 2 2 0 1 0 17 34zM17 17A7 7 0 1 0 17 31 7 7 0 1 0 17 17zM7 10.221C7.532 10.7 8.228 11 9 11c1.657 0 3-1.343 3-3 0-.772-.3-1.468-.779-2H7V10.221zM7 37.779V42h4.221C11.7 41.468 12 40.772 12 40c0-1.657-1.343-3-3-3C8.228 37 7.532 37.3 7 37.779z"></path><path fill="#2e7d32" d="M24 24c0-2.779-1.623-5.172-3.969-6.303C20.024 17.799 20 17.896 20 18v12.317C22.363 29.193 24 26.791 24 24zM26 13H28V15H26zM26 41h-5.899c.152.743.482 1.416.924 2H26V41z"></path><path fill="#388e3c" d="M27,10.221V6h-4.221C22.3,6.532,22,7.228,22,8c0,1.657,1.343,3,3,3C25.772,11,26.468,10.7,27,10.221z"></path><path fill="#ffc107" d="M22,18v22c0,1.657,1.343,3,3,3h14c1.657,0,3-1.343,3-3V18c0-1.657-1.343-3-3-3H25 C23.343,15,22,16.343,22,18z"></path><path fill="#37474f" d="M34 15H38V43H34z"></path></svg>
                    </div>
                    <button className="next" onClick={()=>this.handleClick()}>Next</button>
                </div>
                <div className="setvalue" style={{display:this.state.displayVal}}>
                    <div className="heading">Enter Cost.</div>
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