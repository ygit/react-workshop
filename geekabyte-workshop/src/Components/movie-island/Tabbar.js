import React, { Component } from 'react';

class Tabbar extends Component {

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

    const { selectedType } = this.state
    console.log("selectedType : ", selectedType);



    return (
      <div className="Tabbar">

        <div>
          <span
            data-type="now_showing"
            className={`tab ${selectedType === "now_showing" ? "selected" : ""}`}
            onClick={this.onTabChange}
            >
              Now Showing
          </span>

          <span
             data-type="top_rated"
             className={`tab ${selectedType === "top_rated" ? "selected" : ""}`}
             onClick={this.onTabChange}
             >
              Top Rated
            </span>

        </div>

      </div>
    );
  }
}

export default Tabbar;
