import React from 'react';
import Search from './pages/Search';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Search />
    </PlanetsProvider>
  );
}

export default App;
