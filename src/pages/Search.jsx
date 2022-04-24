import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import FiltersControls from '../components/FiltersControls';
import getPlanetsInfo from '../services';
import PlanetsContext from '../context/PlanetsContext';
import { Card, Main, PageLeftField } from '../styles/search';
import Filters from '../components/Filters';

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
      <FiltersControls />
      <PageLeftField>
        <Filters />
        <Card>
          <Table />
        </Card>
      </PageLeftField>
    </Main>
  );
}

export default Search;
