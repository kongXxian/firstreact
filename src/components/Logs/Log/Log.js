import React, { Component } from 'react'
// 把css文件当成模块进行导入
import './Log.css'

export default class Log extends Component {
 
  render() {
    const {month, day, thing, duration} = this.props.data
    return (
      <div className="item">
        <div className="date">
          <div className="month">
            {month}
          </div>
          <div className="day">
            {day}
          </div>
        </div>

        <div className="content">
          <h2 className="desc">{thing}</h2>
          <div className="time">{duration}</div>
        </div>
        <div className="delete">×</div>
      </div>
    )
  }
}
