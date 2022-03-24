import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { columnList } from '../data';

const NUMERIC_FILTERS_INITIAL_VALUE = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

function Header() {
  const {
    filterByName, setFilterByName,
    numericFilters, setNumericFilters,
  } = useContext(PlanetsContext);

  const [localNumericFilters, setLocalNumericFilters] = useState(
    NUMERIC_FILTERS_INITIAL_VALUE,
  );

  const handleFilterByNumericValuesOnChange = ({ id, value }) => (
    setLocalNumericFilters({ ...localNumericFilters, [id]: value }));

  const handleFilterButtonOnClick = () => {
    const newNumericFiltersList = [...numericFilters, localNumericFilters];
    setNumericFilters(newNumericFiltersList);
  };

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
          onChange={ ({ target: { value } }) => setFilterByName(value) }
        />
      </label>
      <label htmlFor="column">
        Coluna
        <select
          id="column"
          value={ localNumericFilters.column }
          onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
          data-testid="column-filter"
        >
          {columnList.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              {option}
            </option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        Operador
        <select
          id="comparison"
          value={ localNumericFilters.comparison }
          onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          id="value"
          type="number"
          value={ localNumericFilters.value }
          data-testid="value-filter"
          onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
        />
      </label>
      <button
        type="button"
        onClick={ handleFilterButtonOnClick }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </section>
  );
}

export default Header;
