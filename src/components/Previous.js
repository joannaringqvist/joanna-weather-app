import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { PrevNextContainer, PrevNextArrow, PrevNext } from '../styles/GlobalStyling';

const Previous = () => {
  return (
    <PrevNextContainer>
      <PrevNextArrow><FaArrowLeft /></PrevNextArrow>
      <PrevNext>Previous day</PrevNext>
    </PrevNextContainer>
  )
}

export default Previous;