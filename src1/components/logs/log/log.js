import React from 'react'

import './log.css'

class Log extends React.Component{
    render(){
        let {data,del} = this.props;
        return(
            <div>
                <ul>
                    {data.length===0?'暂无数据！':data.map((ele,index)=>{
                        return (<li key={index}><div className='times'><span>{ele.month}</span><span>{ele.day}</span></div>
                            <div className='task'>
                                <span>{ele.thing}</span>
                                <span>{ele.duration}</span>
                            </div>
                            <div className="delete" onClick={()=>del(ele.id)} data-num={index}>×</div>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Log
