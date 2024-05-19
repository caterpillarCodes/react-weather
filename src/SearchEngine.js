import React, { useState } from "react";
import "./SearchEngine.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import GeneralInformation from "./GeneralInformation";
export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [objectData, setObjectData] = useState("");
  function updateWeatherData(response) {
    setObjectData({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response);
    <GeneralInformation object={objectData} city={response.data.name} />;
  }
  function search() {
    let aipkey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${aipkey}&units=metric`;
    axios.get(apiUrl).then(updateWeatherData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <form className="SearchEngine" onSubmit={handleSubmit}>
      <a className="search-btn" href="./">
        <BsSearch />
      </a>
      <input
        type="search"
        className="search-box"
        placeholder="Search for location..."
        onChange={updateCity}
        required
      />
    </form>
  );
}
