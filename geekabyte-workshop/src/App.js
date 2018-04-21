import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Tabbar from './Components/movie-island/Tabbar'


class App extends Component {

  constructor() {
    super()

    this.onSelected = this.onTabSelected.bind(this)
  }

  onTabSelected() {

    console.log("tab selected")
  }

  render() {
    return (
      <div className="App">

        <Header />

        <Tabbar onTabSelected={this.onTabSelected} />

      </div>
    );
  }
}

export default App;
