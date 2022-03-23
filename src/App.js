import React from 'react';
import Search from './Pages/Search';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <Search />
    </PlanetsProvider>
  );
}

export default App;
