import React, { Component } from 'react';
import GroupContainer from './GroupContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src="https://dev.foodsaving.world/images/edd429c1df3beb4dfaa0da633e9ec521.svg" className="App-logo" alt="logo" />
          <h2>foodsaving frontend react proof of concept</h2>
        </div>
        <GroupContainer />
      </div>
    );
  }
}

export default App;
