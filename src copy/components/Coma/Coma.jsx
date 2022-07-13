import React, { Component } from 'react'
import Comb from '../Comb/Comb'
import "./Coma.css"
import Goodscontext from '../../store/goodscontext'
export default class Coma extends Component {

    state = {
        num: 1,
    }

    num = React.createRef();
    setvalue = () => {
        let num = this.num.current.value;
        this.setState({
            num
        })
    }

    render() {
        return (
            <div className='coma'>
                <div className='search'>
                    <span>商品ID</span>
                    <input type="text" ref={this.num} />
                    <input type="button" value="查询" onClick={this.setvalue} />
                </div>
                <div>
                    <Goodscontext.Provider value={this.state.num}>
                        <Comb />
                    </Goodscontext.Provider>
                </div>
            </div>
        )
    }
}
