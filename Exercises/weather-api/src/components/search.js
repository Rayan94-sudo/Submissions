import React, { Component } from "react";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      temp: "122"
    };
  }
  render() {
    return (
      <div>
        <h1> {this.props.temp}</h1>
        <input type="text"></input>
        <button>FIND WEATHER </button>
      </div>
    );
  }
}

export default Search;
