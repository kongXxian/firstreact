import React from 'react'

import LogForm from './components/logForm/loginForm'
import Logs from './components/logs/logs'
class Demo extends React.Component{

    constructor(){
        super();
        this.state={data:[],redata:[]};
        this.subMit = this.subMit.bind(this)
    }

    //添加
    subMit(month, day, thing, duration){
        return (e)=>{
            e.preventDefault();
            let newObj={month,day,thing,duration,id:Date.now()}
            this.setState({data:[newObj,...this.state.data],redata:[newObj,...this.state.redata]})
            localStorage.setItem('logs',JSON.stringify([newObj,...this.state.redata]));
        }
    }

    //删除
    delete = (id) =>{
        console.log(id);
        let {redata,data} = this.state;
        let arr1 = [];
        let arr2 = [];
        redata.forEach(ele=>{
            if(ele.id!==id){
                arr1.push(ele);
            }
        })
        data.forEach(ele=>{
            if(ele.id!==id){
                arr2.push(ele);
            }
        })
        // redata.splice(index,1);
        // data.splice(index,1);
        this.setState({data:arr2,redata:arr1});
        localStorage.setItem('logs',JSON.stringify(arr1));
    }

     //查找
     search=()=>{
        // console.log('@')
        let {searchText} = this.state;
        let reg = new RegExp(searchText,'i');
        let newArr=[];
        this.state.redata.forEach(ele=>{
            if(reg.test(ele.thing)){
                newArr.push(ele);
            }
        })
        this.setState({data:newArr});
    }

    searchT=(e)=>{
        // console.log(e.target.value);
        this.setState({searchText:e.target.value});
    }

    //挂载完成
    componentDidMount(){
        // this.setState({redata:this.state.data})
        if(!!JSON.parse(localStorage.getItem('logs'))){
            // console.log(JSON.parse(localStorage.getItem('logs')));
            this.setState({redata:JSON.parse(localStorage.getItem('logs')),data:JSON.parse(localStorage.getItem('logs'))})
        }
    }


    render(){
        console.log(this.state.redata);
        return(
            <div className='app'>
                <LogForm  subMit={this.subMit} sea={this.search} seT={this.searchT} data={this.state.data}/>
                <Logs data={this.state.data} del={this.delete}/>
            </div>
        )
    }
}

// const data = [
//     { month: '六月', day: 20, thing: '学习JavaScript', duration: '2小时' },
//     { month: '六月', day: 22, thing: '学习Nodejs', duration: '1小时' },
//     { month: '六月', day: 23, thing: '学习React', duration: '2小时' }
// ]

export default Demo