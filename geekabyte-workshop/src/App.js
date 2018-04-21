import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactJS at Of10 by Geekabyte 🚀</h1>
        </header>

        <div>
          <span className="tab" onClick={e => console.log(e)}>Now Showing</span>
          <span className="tab" onClick={e => console.log(e)}>Top Rated</span>
        </div>
        
      </div>
    );
  }
}

export default App;
