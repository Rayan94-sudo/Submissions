import React, { Component } from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
class Theweathernext extends Component {
  render() {
    return (
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
    );
  }
}
export default Theweathernext;
