import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
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

  const WeatherContainer = styled.div`
    border: 1px solid black;
    background-color: coral;
`

  return (
    <WeatherContainer>
      {console.log(weather)}
      <p>{weather.city.name}</p>
      {weather.list.map((w) => (
        <div>
          <p>{w.dt_txt}</p>
          <p>Temperature: {w.main.temp}</p>
          <p>Weather: {w.weather[0].main}</p>
          <p>Description: {w.weather[0].description}</p>
        </div>
      ))}
      <p>Today</p>
    </WeatherContainer>
  )
}

export default Actual;