import React from "react";

const TopButton = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Baku",
    },
    {
      id: 2,
      title: "Paris",
    },
    {
      id: 3,
      title: "London",
    },
    {
      id: 4,
      title: "Istanbul",
    },
    {
      id: 5,
      title: "New York",
    },
  ];

  return (
    <div className="hidden md:flex item-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={() => setQuery({ q: city.title })}
          key={city.id}
          className="text-white text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
