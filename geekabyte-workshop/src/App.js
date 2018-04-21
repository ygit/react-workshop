import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabbar from './movie-island/Tabbar.js'
// import './movie-island/Tabbar.js'


class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactJS at Of10 by Geekabyte</h1>
        </header>

        <Tabbar/>

      </div>
    );
  }
}

export default App;
