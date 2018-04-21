import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Tabbar from './Components/movie-island/Tabbar'


class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <Tabbar />

      </div>
    );
  }
}

export default App;
