import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import getPlanetsInfo from '../services';
import PlanetsContext from '../context/PlanetsContext';
import { Card, Main } from '../styles/search';

function Search() {
  const { setPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    const requestPlanetsInfo = async () => {
      const planetsFromAPI = await getPlanetsInfo();
      setPlanets(planetsFromAPI);
    };
    requestPlanetsInfo();
  }, [setPlanets]);

  return (
    <Main>
      <Header />
      <Card>
        <Table />
      </Card>
    </Main>
  );
}

export default Search;
