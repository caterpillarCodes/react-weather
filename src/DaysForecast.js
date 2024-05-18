import React from "react";
import "./DaysForecast.css";

export default function DaysForecast() {
  return (
    <div className="DaysForecast">
      <h5>MON</h5>
      <i class="fa-solid fa-cloud "></i>
      <p class="next-day-situation">few clouds</p>
      <span className="temperature-max">15º</span>
      <span className="temperature-min">4º</span>
    </div>
  );
}
