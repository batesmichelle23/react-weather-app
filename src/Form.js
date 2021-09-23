import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showForecast(response) {
    setLoaded(true);
      setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      Icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "5d28e41830862bc850144acfa82e7516";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="weather">
        {form}
            <p>{setCity}</p>
        <p>{Math.round(weather.temperature)}°C</p>
        <p>{weather.description}</p>
        <p>{weather.wind}%</p>
        <p>{weather.humidity} Km/H</p>
        <img src={weather.Icon} alt={weather.description} />
      </div>
    );
  } else {
    return form;
  }
}
