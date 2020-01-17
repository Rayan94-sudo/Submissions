import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
class Theweathernow extends Component {
  render() {
    return (
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
    );
  }
}
export default Theweathernow;
