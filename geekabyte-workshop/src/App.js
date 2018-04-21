import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onTabChange(event){
    console.log(event)
    console.log("onTabChange invoked")
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactJS at Of10 by Geekabyte</h1>
        </header>

        <div>
          <span className="tab" onClick={this.onTabChange}>Now Showing</span>
          <span className="tab" onClick={this.onTabChange}>Top Rated</span>
        </div>

      </div>
    );
  }
}

export default App;
