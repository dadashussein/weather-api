import React from "react";
import {
  formatToLocaleTime,
  iconUrlFromCode,
} from "../services/weatherServices";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3 ">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-7xl">{`${temp.toFixed()}˚ `}</p>
        <div className="flex flex-col space-y-2">
          <div className=" flex flex-col font-light text-base items-center justify-center">
            <span className="mr-1">
              <i class="uil uil-temperature-empty"></i> Real fell:{" "}
              {`${feels_like.toFixed()}˚`}
              <span>34</span>{" "}
            </span>

            <span className="mr-1">
              <i class="uil uil-tear"></i> Humidity:{" "}
              <span>{`${humidity.toFixed()} %`}</span>{" "}
            </span>

            <span className="mr-1">
              <i class="uil uil-wind"></i> Wind:{" "}
              <span>{`${speed.toFixed()} km/h`}</span>{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center text-white py-3 ">
        <p className="font-light">
          <span>
            <i class="uil uil-sun"></i>
          </span>{" "}
          Sunrise:{" "}
          <span className="font-medium ml-1">
            {formatToLocaleTime(sunrise, timezone, "hh:mm a")}
          </span>{" "}
          |
          <span>
            <i class="uil uil-sunset"></i>
          </span>
          Sunset:{" "}
          <span className="font-medium ml-1">
            {formatToLocaleTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
      </div>

      <div className="flex flex-row items-center justify-center text-white py-3 ">
        <p className="font-light">
          <span>
            <i class="uil uil-temperature-minus"></i>
          </span>
          Min:
          <span className="font-medium ml-1">{`${temp_min.toFixed()}˚  `}</span>
          <span>
            <i class="uil uil-temperature-plus"></i>
          </span>
          Max:
          <span className="font-medium ml-1">{`${temp_max.toFixed()}˚`}</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
