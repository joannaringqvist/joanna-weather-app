import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/urls';

const Actual = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {console.log(weather)}
      <p>{weather.city.name}</p>
      {weather.list.map((w) => (
        <div>
          <p>Time: {w.dt_txt}</p>
          <p>Temp: {w.main.temp}</p>
          <p>Weather: {w.weather[0].main}</p>
          <p>Description: {w.weather[0].description}</p>
        </div>
      ))}
      <p>Today</p>
    </div>
  )
}

export default Actual;