import  {DateTime } from "luxon";
const API_KEY = "ccce7999e11cd17fa951c988128c7c0c";
const API_URL = "https://api.openweathermap.org/data/2.5";

//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly,alerts&appid=ccce7999e11cd17fa951c988128c7c0c#

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(API_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lon, lat },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];
  return {
    lon,
    lat,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    weather,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocaleTime(d.dt, timezone, "ccc"),
      temp: d.temp.day.toFixed(),
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocaleTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp.toFixed(),
      icon: d.weather[0].icon,
    };
  });

  return {
    timezone,
    daily,
    hourly,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lon, lat } = formattedCurrentWeather;
  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocaleTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const iconUrlFromCode = (code) => {
  return `https://openweathermap.org/img/wn/${code}.png`;
};

export default getFormattedWeatherData;


export {formatToLocaleTime, iconUrlFromCode};