import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PrevNextContainer, PrevNextArrow, PrevNext } from '../styles/GlobalStyling';

const Next = () => {
  return (
    <PrevNextContainer>
      <PrevNextArrow><FaArrowRight /></PrevNextArrow>
      <PrevNext>Next day</PrevNext>
    </PrevNextContainer>
  )
}

export default Next;