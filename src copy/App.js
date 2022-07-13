import React, { Component } from 'react';
import "./App.css";
import Coma from './components/Coma/Coma';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Coma />
      </div>
    )
  }
}
