import React from "react";
import { useState } from "react";

const Input = ({ setUnits, setQuery, units }) => {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.target.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };

  const handleSearch = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex  flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="rounded text-sm md:text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none "
          placeholder="Search..."
        />

        <span
          onClick={handleSearch}
          className="text-white cursor-pointer transition ease-out hover:scale-125 text-2xl"
        >
          <i class="uil uil-search"></i>
        </span>
        <span
          onClick={handleLocation}
          className="text-white cursor-pointer transition ease-out hover:scale-125 text-2xl"
        >
          <i class="uil uil-location-point"></i>
        </span>
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={handleUnitsChange}
          name="metric"
          className="text-white text-xl font-light transition ease-out  hover:scale-125"
        >
          ℃
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          onClick={handleUnitsChange}
          name="imperial"
          className="text-white text-xl font-light transition ease-out  hover:scale-125 "
        >
          ℉
        </button>
      </div>
    </div>
  );
};

export default Input;
