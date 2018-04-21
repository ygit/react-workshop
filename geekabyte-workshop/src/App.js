import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.onTabChange = this.onTabChange.bind(this)

    // default state
    this.state = { selectedType: "now_showing" }
  }

  onTabChange(event) {
    console.log("current context : ", this)
    console.log(event)
    console.log("onTabChange invoked")

    // setting the state
    const selectedType = event.target.getAttribute("data-type")
    console.log("selected type : ", selectedType)
    this.setState({
      selectedType: selectedType
    })
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ReactJS at Of10 by Geekabyte</h1>
        </header>

        <div>
          <span data-type="now_showing" className="tab" onClick={this.onTabChange}>Now Showing</span>
          <span data-type="top_rated" className="tab" onClick={this.onTabChange}>Top Rated</span>
        </div>

      </div>
    );
  }
}

export default App;
