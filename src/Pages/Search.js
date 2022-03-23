import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import getPlanetsInfo from '../services';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { setPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    const requestPlanetsInfo = async () => {
      const planets = await getPlanetsInfo();
      setPlanets(planets);
    };
    requestPlanetsInfo();
  }, [setPlanets]);

  return (
    <main>
      <Header />
      <Table />
    </main>
  );
}

export default Search;
