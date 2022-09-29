import React from 'react';
import styled from 'styled-components'

import Actual from '../components/Actual';
import Previous from '../components/Previous';
import Next from '../components/Next';

const Container = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 340px;
    @media (min-width: 1025px) {
        width: 1025px;
        background-color: pink;
      }
`

const Weather = () => {
  return (
    <Container>
      <Previous />
      <Actual />
      <Next />
    </Container>
  )
}

export default Weather;