import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

export const NEGATIVE_ONE = -1;

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [planetsListToRender, setPlanetsListToRender] = useState([]);
  const [numericFilters, setNumericFilters] = useState([]);
  const [sortPreference, setSortPreference] = useState({});

  const applyNumericFilter = (numericFilter, planetsListToFilter) => {
    const { column, comparison, value } = numericFilter;
    if (comparison === 'igual a') {
      return planetsListToFilter.filter(
        (planet) => parseFloat(planet[column]) === parseFloat(value),
      );
    }
    if (comparison === 'maior que') {
      return planetsListToFilter.filter(
        (planet) => parseFloat(planet[column]) > parseFloat(value),
      );
    }
    if (comparison === 'menor que') {
      return planetsListToFilter.filter(
        (planet) => parseFloat(planet[column]) < parseFloat(value),
      );
    }
    return [];
  };

  const applyOrderPreference = (planetListToOrder, orderPreference) => {
    const { column, sort } = orderPreference;
    return planetListToOrder.sort((a, b) => {
      if (a[column] === 'unknown') return 1;
      if (b[column] === 'unknown') return NEGATIVE_ONE;
      return sort === 'ASC'
        ? parseFloat(a[column]) - parseFloat(b[column])
        : parseFloat(b[column]) - parseFloat(a[column]);
    });
  };

  useEffect(() => {
    const planetsList = filterByName
      ? planets.filter((planet) =>
          planet.name.toLowerCase().includes(filterByName.toLowerCase()),
        )
      : planets;

    let newPlanetListToRender = [...planetsList];
    numericFilters.forEach((numericFilter) => {
      newPlanetListToRender = applyNumericFilter(
        numericFilter,
        newPlanetListToRender,
      );
    });

    if (Object.entries(sortPreference).length) {
      newPlanetListToRender = applyOrderPreference(
        newPlanetListToRender,
        sortPreference,
      );
    }

    setPlanetsListToRender(newPlanetListToRender);
  }, [numericFilters, filterByName, planets, sortPreference]);

  const contextValue = useMemo(
    () => ({
      planets,
      setPlanets,
      filterByName,
      setFilterByName,
      planetsListToRender,
      numericFilters,
      setNumericFilters,
      sortPreference,
      setSortPreference,
    }),
    [
      planets,
      setPlanets,
      filterByName,
      setFilterByName,
      planetsListToRender,
      numericFilters,
      setNumericFilters,
      sortPreference,
      setSortPreference,
    ],
  );

  return (
    <PlanetsContext.Provider value={contextValue}>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default PlanetsProvider;
