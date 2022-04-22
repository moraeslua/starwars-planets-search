import React from 'react';
import Search from './pages/Search';
import PlanetsProvider from './context/PlanetsProvider';
import GlobalStyle from './styles/global';

function App() {
  return (
    <PlanetsProvider>
      <GlobalStyle />
      <Search />
    </PlanetsProvider>
  );
}

export default App;
