import React from "react";
import {Link} from "react-router-dom";
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

class App extends React.Component{
    render(){
        const transData=JSON.parse(localStorage.getItem('transData'));
        const data=[];
        for (var i in transData){
            data.push({'name':transData[i][0],'amt':transData[i][1]})
        }

        return(
            <div className='highlights'>
                <h2 className="highlighhead">Recent Highlights</h2>
                Highlights per category of Transaction.
                <hr width='20px' color='black'/>
                <div className="graphnew">
                <ResponsiveContainer width="90%" height="85%">
                    <BarChart width={140} data={data} height={40}>
                        <XAxis stroke="#000" dataKey='name' interval={'preserveStartEnd'}/>
                    <Bar type="monotone" dataKey='amt'  activeDot={{ r: 6 }} stroke="#000" yAxisId={1} />
                    </BarChart>
                </ResponsiveContainer>
                </div>
                <Link to='/Dashboard'>Back</Link>
            </div>
        )
    }
}
export default App;