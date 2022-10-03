import React from 'react';
import styled from 'styled-components'
import { WiDaySunny, WiCloud, WiRain, WiDaySnow } from 'react-icons/wi';

const WeatherContainer = styled.div`
  @media (min-width: 1025px) {
    width: 35%;
  }
`
const Location = styled.p`
  margin: 0 0 50px 0;
  font-size: 1rem;
`
const DayAndDate = styled.div`
  text-align: center;
  margin: 0 0 30px 0;
`
const Day = styled.p`
  font-weight: 800;
  font-size: 1.2rem;
  margin: 10px 0 3px 0;
  @media (min-width: 1025px) {
    font-size: 1.3rem;
  }
`
const DateToShow = styled.p`
  font-weight: 400;
  font-size: 1.0rem;
  margin: 0;
  @media (min-width: 1025px) {
    font-size: 1rem;
  }
`
const Forecast = styled.div`
  border-bottom: 2px solid #000;
  margin-bottom: 30px;
  margin-top: 30px;
  padding-bottom: 30px;
  text-align: center;

`
const Temperature = styled.p`
  font-size: 2.4rem;
  margin: 0;
  padding: 0;
`
const WeatherIcon = styled.span`
  font-size: 5rem;
  margin: 0 0 -10px 0;
  padding: 0 0 -10px 0;
`
const WeatherDescription = styled.p`
  margin: -25px 0 0 0;
  padding: 0;
`

const Actual = (props) => {
  const weatherToday = props.weather.list.filter((item) => item.dt_txt.includes(props.dayToday));

  if (weatherToday.length === 0) {
    return <div>Could not find any weather for that date.</div>
  }

  const weekday = new Date(weatherToday[0].dt_txt).toLocaleDateString('en-US', { weekday: 'long' });

  const showWeatherIcon = (weatherToShowIconFor) => {
    switch (weatherToShowIconFor) {
      case 'Clouds':
        return <WiCloud />;
      case 'Clear':
        return <WiDaySunny />;
      case 'Rain':
        return <WiRain />;
      case 'Snow':
        return <WiDaySnow />;
      default:
        return <WiCloud />;
    }
  }

  return (
    <WeatherContainer>
      <Location>Showing weather for: the Royal Castle, Stockholm</Location>
      <DayAndDate>
        <Day>{weekday}</Day>
        <DateToShow>{props.dayToday}</DateToShow>
      </DayAndDate>
      {weatherToday.map((w) => (
        <Forecast key={w.dt}>
          <p>{new Date(w.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          <Temperature>{Math.round(w.main.temp)}°C</Temperature>
          <WeatherIcon>{showWeatherIcon(w.weather[0].main)}</WeatherIcon>
          <WeatherDescription>{w.weather[0].description}</WeatherDescription>
        </Forecast>
      ))}
    </WeatherContainer>
  )
}

export default Actual;