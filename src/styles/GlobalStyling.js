import styled from 'styled-components/macro'

export const Main = styled.main`
    width: 340px;
    margin: 0 auto;
    @media (min-width: 1025px) {
      width: 1025px;
    }
`

export const PrevNextContainer = styled.div`
    text-align: center;
    width: 3rem;
    margin: 72px 0 0;
    @media (min-width: 1025px) {
      width: 6rem;
    }
`

export const PrevNextArrow = styled.span`
    font-size: 1.2rem;
    text-align: center;
    margin: 0 auto;
    @media (min-width: 1025px) {
      font-size: 2.4rem;
    }
`

export const PrevNext = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    @media (min-width: 1025px) {
      font-size: 1rem;
    }
`