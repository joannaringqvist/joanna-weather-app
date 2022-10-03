import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { PrevNextContainer, PrevNextArrow, PrevNext } from '../styles/GlobalStyling';

const Previous = (props) => {
  const prevDay = new Date(props.dayToday);
  prevDay.setDate(prevDay.getDate() - 1);
  const prevDayString = prevDay.toLocaleDateString();

  return (
    <Link to={`/${prevDayString}`}>
      <PrevNextContainer>
        <PrevNextArrow><FaArrowLeft /></PrevNextArrow>
        <PrevNext>Previous day</PrevNext>
      </PrevNextContainer>
    </Link>
  )
}

export default Previous;