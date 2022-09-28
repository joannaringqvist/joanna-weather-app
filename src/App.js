import React from 'react';

import Actual from './components/Actual';
import Yesterday from './components/Yesterday';
import Tomorrow from './components/Tomorrow';

export const App = () => {
  return (
    <main>
      <Yesterday />
      <Actual />
      <Tomorrow />
    </main>
  )
}

