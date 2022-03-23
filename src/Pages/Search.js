import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import getPlanetsInfo from '../services';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { setPlanets, filterPlanetsByName } = useContext(PlanetsContext);

  useEffect(() => {
    const requestPlanetsInfo = async () => {
      const planetsFromAPI = await getPlanetsInfo();
      setPlanets(planetsFromAPI);
    };
    requestPlanetsInfo();
  }, [setPlanets]);

  return (
    <main>
      <Header />
      <Table filteredPlanetsByName={ filterPlanetsByName() } />
    </main>
  );
}

export default Search;
