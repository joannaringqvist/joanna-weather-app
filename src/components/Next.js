import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { PrevNextContainer, PrevNextArrow, PrevNext } from '../styles/GlobalStyling';

const Next = (props) => {
  const nextDay = new Date(props.dayToday);
  nextDay.setDate(nextDay.getDate() + 1);
  const nextDayString = nextDay.toLocaleDateString();

  return (
    <Link to={`/${nextDayString}`}>
      <PrevNextContainer>
        <PrevNextArrow><FaArrowRight /></PrevNextArrow>
        <PrevNext>Next day</PrevNext>
      </PrevNextContainer>
    </Link>
  )
}

export default Next;