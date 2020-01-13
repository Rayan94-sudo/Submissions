import React, { Component } from "react";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <input type="text"></input>
          <button>FIND WEATHER </button>
        </header>
        <main className="app__main">
          <div class="grid-container_1">
            <img src={mostlycloudy} id="_h" alt="clear-icon"></img>
            <p>overcast clouds</p>
            <h4>
              Temperature <span>10°C to 11°C</span>
            </h4>
            <h6>
              Humidity <span> 78% </span> Pressure <span> 1008.48</span>
            </h6>
          </div>
          <div class="grid-container">
            <div class="grid-item">
              <h5>03:00</h5>
              <img src={mostlycloudy} alt="clear"></img>
              <h5>8°C</h5>
            </div>
            <div class="grid-item">
              <h5>06:00</h5>
              <img src={mostlycloudy} alt="clear"></img>
              <h5>9°C</h5>
            </div>
            <div class="grid-item">
              <h5>09:00</h5>
              <img src={mostlycloudy} alt="clear"></img>
              <h5>14°C</h5>
            </div>
            <div class="grid-item">
              <h5>12:00</h5>
              <img src={mostlycloudy} alt="clear"></img>
              <h5>17°C</h5>
            </div>
            <div class="grid-item">
              <h5>15:00</h5>
              <img src={mostlycloudy} alt="clear"></img>
              <h5>18°C</h5>
            </div>
            <div class="grid-item">
              <h5>19:00</h5>
              <img src={mostlycloudy} alt="clear"></img>
              <h5>16°C</h5>
            </div>
            <div class="grid-item">
              <h5>21:00</h5>
              <img src={mostlycloudy} alt="clear"></img>
              <h5>13°C</h5>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
