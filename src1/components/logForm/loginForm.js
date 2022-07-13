import React from 'react'

import './loginForm.css'
class LogForm extends React.Component{

    //初始化
    state={month: '', day: '', thing: '', duration: ''}

    //设置
    dataChange=(names)=>{
        return(e)=>{
            this.setState({[names]:e.target.value})
        }
    }

    render(){
        let {month, day, thing, duration} = this.state;
        // console.log(month, day, thing, duration);
        let {sea,seT}= this.props;
        return(
            <div className='form1'>
                <form>
                <span>月份</span><input onChange={this.dataChange('month')} autoComplete='on' value={month}></input><br />
                <span>日期</span><input onChange={this.dataChange('day')}  autoComplete='on' value={day}></input ><br />
                <span>任务</span><input onChange={this.dataChange('thing')} autoComplete='on' value={thing}></input><br />
                <span>时间</span><input onChange={this.dataChange('duration')} autoComplete='on' value={duration}></input><br />
                <button onClick={this.props.subMit(month, day, thing, duration,this.props.data)} >添加</button>
                </form>
                <div className='search'>
                    <input type='text' onChange={seT}></input><span onClick={sea}>搜索</span>
                </div>
            </div>
        )
    }
}

export default LogForm
