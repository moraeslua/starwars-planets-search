import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const {
    filterByName,
    setFilterByName,
    filterPlanetsByName,
  } = useContext(PlanetsContext);

  return (
    <section>
      <label htmlFor="name-filter">
        Filtrar por nome
        { ' ' }
        <input
          id="name-filter"
          type="text"
          value={ filterByName }
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => {
            setFilterByName(value); filterPlanetsByName();
          } }
        />
      </label>
    </section>
  );
}

export default Header;
