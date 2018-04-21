import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Tabbar from './Components/movie-island/Tabbar'
import { nowShowingUrl, topRatedUrl } from './Components/movie-island/apiConfig'
import axios from 'axios'


class App extends Component {

  constructor() {
    super()

    this.onSelected = this.onTabSelected.bind(this)
  }

  onTabSelected(selectedType) {

    console.log("tab selected: ", selectedType)
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
