import React from "react";
import './Style.css';
//import {Link} from "react-router-dom";

function App(props) {
    return (
        <div className="add-expense-app">
            <div className="heading">
                Select Category.
            </div>
            <div className="categories">
                <img cat-name="Education" alt='cetegory pic' src="https://cdn-icons.flaticon.com/png/512/3976/premium/3976625.png?token=exp=1636791393~hmac=68db79a5000e4927c891f1d1253a1761" className="cat-edu"/>
                <img cat-name="Transport" alt='cetegory pic' src="https://cdn-icons.flaticon.com/png/512/3124/premium/3124364.png?token=exp=1636792374~hmac=dcaacffb598bdc441ed75c1a730d3f56" className="cat-trans" />
                <img cat-name="Fuel Bill" alt='cetegory pic' src="https://cdn-icons-png.flaticon.com/512/2933/2933939.png" className="cat-fuel" />
                <img cat-name="Grocery" alt='cetegory pic' src="https://cdn-icons-png.flaticon.com/512/1261/1261163.png" className="cat-grocery" />
                <img cat-name="Shopping" alt='cetegory pic' src="https://cdn-icons.flaticon.com/png/512/1436/premium/1436297.png?token=exp=1636792530~hmac=a622aac92c3ba66ab77996266e38b8d7" className="cat-shopping" />
                <img cat-name="House Rent" alt='cetegory pic' src="https://cdn-icons-png.flaticon.com/512/602/602270.png" className="cat-shopping" />
                <img cat-name="Newspaper" alt='cetegory pic' src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png" className="cat-news" />
                <img cat-name="Medicine" alt='cetegory pic' src="https://cdn-icons.flaticon.com/png/512/647/premium/647237.png?token=exp=1636792619~hmac=57be7d2536ccddd969a6ef89326487ef" className="cat-med" />
                <img cat-name="Mobile Bill" alt='cetegory pic' src="https://cdn-icons.flaticon.com/png/512/1951/premium/1951585.png?token=exp=1636792678~hmac=ce12f4a4ba1473a6053f2d0db06a73a7" className="cat-mobile" />
                <img cat-name="Electricity Bill" alt='cetegory pic' src="https://cdn-icons.flaticon.com/png/512/3348/premium/3348380.png?token=exp=1636792786~hmac=f82eebad8e129c78c0d6f7671341529a" className="cat-elec" />
                <img cat-name="TV Bill" alt='cetegory pic' src="https://cdn-icons.flaticon.com/png/512/3289/premium/3289278.png?token=exp=1636792860~hmac=c03ecb111dc60c3a9868fca17b77d3d6" className="cat-tv" />
                <img cat-name="Misc." alt='cetegory pic' src="https://cdn-icons.flaticon.com/png/512/2953/premium/2953423.png?token=exp=1636792892~hmac=4083ffc34879aedd0b5e1ab69ed1227f" className="cat-misc" />
            </div>
            <button className="next">Next</button>
        </div>
    )
}
export default App