import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { WiHumidity } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import "./GeneralInformation.css";

export default function GeneralInformation(props) {
  console.log(props.data.temperature);
  return (
    <div className="GeneralInformation">
      <div className="col">
        <p className="current-city">{props.city}</p>
        <p className="current-date">Wednesday 16:08 | AUG 18</p>
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size={90}
          animate={true}
        />
        <p className="current-situation">{props.description}</p>
      </div>
      <div className="col">
        <p className="current-temperature">
          <span id="temperature">17</span>°<span id="temperature-unit">C</span>
        </p>
        <div className="CurrentHumidityWind">
          <p>
            <WiHumidity /> <span id="humidity"></span>%
          </p>
          <p className="wind">
            <WiStrongWind />
            <span id="wind"></span> km/h
          </p>
        </div>
      </div>
    </div>
  );
}
