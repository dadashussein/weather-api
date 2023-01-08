import React from "react";
import { iconUrlFromCode } from "../services/weatherServices";

const Forecast = ({ title, items }) => {
  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="text-base font-light">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt=""
              className="w-12 my-1"
            />
            <p className="text-lg font-medium">{`${item.temp} ˚`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
