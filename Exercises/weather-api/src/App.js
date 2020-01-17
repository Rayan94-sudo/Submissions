import React, { Component } from "react";
import "./App.css";
import Search from "./components/search";
import Theweathernow from "./components/the_weather_now";
import Theweathernext from "./components/the_weather_next";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search temp="100" />
          <Search temp="120" />
        </header>
        <main className="app__main">
          <Theweathernow />
          <Theweathernext />
        </main>
      </div>
    );
  }
}

export default App;
