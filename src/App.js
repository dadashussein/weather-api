import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [inpCity, setInpCity] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ccce7999e11cd17fa951c988128c7c0c&units=metric`
      );
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  const handleChange = (e) => {
    setInpCity(e.target.value);
  };

  const eventSubmit = (e) => {
    e.preventDefault();
    setCity(inpCity);
    setInpCity("");
  };
  return (
    <div className="container">
      <Weather data={weather} />
      <input className="input" type="text" onChange={handleChange} />
      <button className="search__b" onClick={eventSubmit}>
        Search
      </button> <i class="uil uil-airplay"></i>
    </div>
  );
}

export default App;
