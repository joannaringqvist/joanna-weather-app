import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { API_URL } from 'utils/urls';

import Actual from '../components/Actual';
import Previous from '../components/Previous';
import Next from '../components/Next';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0;
    width: 340px;
    @media (min-width: 1025px) {
        width: 1025px;
      }
`

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  const today = new Date().toLocaleDateString();

  useEffect(() => {
    // setLoading(true);
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
    <Container>
      <Previous />
      <Actual weather={weather} dayToday={today} />
      <Next />
    </Container>
  )
}

export default Weather;