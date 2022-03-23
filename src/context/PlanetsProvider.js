import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  const filterPlanetsByName = () => {
    const filteredPlanets = planets.filter(
      (planet) => planet.name.includes(filterByName),
    );
    return filteredPlanets;
  };

  const contextValue = {
    planets,
    setPlanets,
    filterByName,
    setFilterByName,
    filterPlanetsByName,
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
