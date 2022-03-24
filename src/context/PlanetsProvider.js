import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [planetsListToRender, setPlanetsListToRender] = useState([]);
  const [numericFilters, setNumericFilters] = useState([]);

  // ter um aplicador de filtro
  // aplicar o filtro baseado em planetsListByFilter
  // para cada filtro que existe, filtrar de planetsListByFilter

  useEffect(() => {
    const planetsList = filterByName ? planets.filter(
      (planet) => {
        console.log(planet.name.toLowerCase().includes(filterByName.toLowerCase()));
        return planet.name.toLowerCase().includes(filterByName.toLowerCase());
      },
    ) : planets;

    let filteredPlanetsList = [...planetsList];

    numericFilters.forEach((numericFilter) => {
      const { column, comparison, value } = numericFilter;
      if (comparison === 'igual a') {
        console.log(comparison);
        filteredPlanetsList = filteredPlanetsList.filter(
          (planet) => parseFloat(planet[column]) === parseFloat(value),
        );
        console.log('copia', filteredPlanetsList);
        return;
      } if (comparison === 'maior que') {
        console.log('comparison');
        filteredPlanetsList = filteredPlanetsList.filter((planet) => {
          console.log(planet[column], value);
          return parseFloat(planet[column]) > parseFloat(value);
        });
        console.log('copia', filteredPlanetsList);
        return;
      } if (comparison === 'menor que') {
        console.log(comparison);
        filteredPlanetsList = filteredPlanetsList.filter((planet) => {
          console.log(planet[column], value);
          return parseFloat(planet[column]) < parseFloat(value);
        });
        console.log('copia', filteredPlanetsList);
      }
    });
    setPlanetsListToRender(filteredPlanetsList);
  }, [numericFilters, filterByName, planets]);

  const contextValue = {
    planets,
    setPlanets,
    filterByName,
    setFilterByName,
    planetsListToRender,
    numericFilters,
    setNumericFilters,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default PlanetsProvider;
