import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { columnList } from '../data';

const NUMERIC_FILTERS_INITIAL_VALUE = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

let columnListToRender = [];

function Header() {
  const {
    filterByName, setFilterByName,
    numericFilters, setNumericFilters,
  } = useContext(PlanetsContext);

  useEffect(() => {
    columnListToRender = columnList.filter((columnItem) => !numericFilters
      .map((filter) => filter.column)
      .includes(columnItem));
    console.log('columnListToRender', columnListToRender);
  }, [numericFilters]);

  const [localNumericFilters, setLocalNumericFilters] = useState(
    NUMERIC_FILTERS_INITIAL_VALUE,
  );

  const handleFilterByNumericValuesOnChange = ({ id, value }) => (
    setLocalNumericFilters({ ...localNumericFilters, [id]: value }));

  const handleFilterButtonOnClick = () => {
    const newNumericFiltersList = [...numericFilters, localNumericFilters];
    setNumericFilters(newNumericFiltersList);
  };

  const handleRemoveNumericFilter = (columnToRemove) => {
    console.log('column', column);
    const newNumericFiltersList = numericFilters.filter(
      ({ column }) => column !== columnToRemove,
    );
    setNumericFilters(newNumericFiltersList);
  };

  const handleRemoveAllFilters = () => {
    setNumericFilters([]);
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
          {columnListToRender.map((option) => (
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
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ handleRemoveAllFilters }
      >
        Remover todos os filtros
      </button>
      {numericFilters.map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          <p>
            {column}
            {' '}
            {comparison}
            {' '}
            {value}
          </p>
          <button
            type="button"
            onClick={ () => handleRemoveNumericFilter(column) }
          >
            X
          </button>
        </div>
      ))}
    </section>
  );
}

export default Header;
