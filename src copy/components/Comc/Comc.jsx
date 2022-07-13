import React, { Component } from 'react'
import "./Comc.css";
import axios from 'axios';
import Goodscontext from '../../store/goodscontext'
export default class Comc extends Component {

    state = {
        data: [],
        num:1,
    }
    
    get_data=(num)=>{
        axios.get(`https://api.shop.eduwork.cn/api/goods/${num}`)
        .then(res=>{
            this.state.data=res.data.goods
        })
    }
    
    componentDidUpdate(){
        console.log('com',this.state.data);
    }

    componentDidMount() {
        this.get_data(1);
    }

    fn1=(res)=>{
        console.log('@',res);
        this.state.num=res;
        this.get_data(res);
    }

    render() {
        return (
            <div className='comc'>
                <Goodscontext.Consumer>
                    {    
                        res =>{this.fn1(res)}
                    }
                </Goodscontext.Consumer>
                <div className="item">
                    {
                        this.state.data.description
                    }
                    <img src="" alt="" />
                </div>
            </div>
        )
    }
}
