import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Weather from './pages/Weather';
import { Main } from './styles/GlobalStyling';

export const App = () => {
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path="/:date" element={<Weather />} />
          <Route path="/" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </Main>
  )
}

