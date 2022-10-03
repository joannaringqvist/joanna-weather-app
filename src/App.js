import React from 'react';

import Weather from './pages/Weather.js';
import { Main } from './styles/GlobalStyling';

export const App = () => {
  return (
    <Main>
      <Weather />
      {/* <Bookmarks /> */}
    </Main>
  )
}

