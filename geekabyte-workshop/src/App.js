import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Tabbar from './Components/movie-island/Tabbar'
import { nowShowingUrl, topRatedUrl } from './Components/movie-island/apiConfig'
import axios from 'axios'


class App extends Component {

  constructor() {
    super()

    this.onTabSelected = this.onTabSelected.bind(this)
    this.state = { nowShowingList:[], topRatedList: [] }
  }

  onTabSelected(selectedType) {

    console.log("tab selected: ", selectedType)

    if (selectedType === "now_showing") {
        axios.get(nowShowingUrl).then(response => {

          console.log(response)

          const { data } = response

          this.setState({
            nowShowingList: data,
          })
        })
    }
    else if (selectedType === "top_rated") {
      axios.get(topRatedUrl).then(response => {
        console.log(response)

        const { data } = response

        this.setState({
          topRatedList: data,
        })
      })
    }
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
