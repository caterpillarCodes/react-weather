import React from "react";
import "./DaysForecast.css";
import ReactAnimatedWeather from "react-animated-weather";
export default function DaysForecast() {
  return (
    <div className="DaysForecast">
      <h5>MON</h5>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="white"
        size={40}
        animate={true}
      />
      <p class="next-day-situation">few clouds</p>
      <span className="temperature-max">15º</span>
      <span className="temperature-min">4º</span>
    </div>
  );
}
