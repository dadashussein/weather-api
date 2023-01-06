import React from "react";
import "./weather.css";
import { useState } from "react";

const Weather = ({ data }) => {
  const [Toogle, setToogle] = useState("");

  return (
    <section className="weather__container">
      <div className="weather__location">
        <p>Current Weather</p>
        <span>10:30AM</span>

        <div className="weather__icon">
          <img
            src={`http://openweathermap.org/img/w/${data.weather?.[0].icon}.png`}
            alt="weather icon"
          />
        </div>
        <span className="weather__city">
          {data.name} {data.sys?.country}
        </span>
          <span className="weather__temp">{data.main?.temp}˚</span><span className="celcius">C</span>
          
        <span>
          <span className="weather__sky">{data.weather?.[0].main}</span>
        </span>

      </div>

      <div className="weather__info">
        <div className="weather__cloudy">
          <p>Cloudy</p> <span>{data.clouds?.all}%</span>
        </div>

        <div className="weather__humidity">
          <p>Humidity</p> <span>{data.main?.humidity} </span>
        </div>

        <div className="weather__wind">
          <p>Wind</p> <span>{data.wind?.speed} </span>
        </div>
      </div>
    </section>
  );
};

export default Weather;
