import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { numericFiltersOptions } from '../data';
import Dropdown from './Dropdown';

const NUMERIC_FILTERS_INITIAL_VALUE = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

const NUMERIC_ORDER_COLUMN_INITIAL_VALUE = {
  column: 'population',
  sort: 'ASC',
};

function Header() {
  const {
    filterByName, setFilterByName,
    numericFilters, setNumericFilters,
    setSortPreference,
  } = useContext(PlanetsContext);

  const [localNumericFilters, setLocalNumericFilters] = useState(
    NUMERIC_FILTERS_INITIAL_VALUE,
  );

  const [localNumericOrderColumn, setlocalNumericOrderColumn] = useState(
    NUMERIC_ORDER_COLUMN_INITIAL_VALUE,
  );

  const numericFiltersOptionsToRender = numericFiltersOptions
    .filter((columnItem) => !numericFilters.map((filter) => filter.column)
      .includes(columnItem));

  const handleFilterByNumericValuesOnChange = ({ name, value, id }) => {
    // console.log('id: ', id);
    if (id === 'column-sort' || id === 'sort-asc' || id === 'sort-desc') {
      return setlocalNumericOrderColumn({ ...localNumericOrderColumn, [name]: value });
    }
    return setLocalNumericFilters({ ...localNumericFilters, [name]: value });
  };

  const handleFilterButtonOnClick = () => {
    const newNumericFiltersList = [...numericFilters, localNumericFilters];
    setNumericFilters(newNumericFiltersList);
  };

  const handleRemoveNumericFilter = (columnToRemove) => {
    const newNumericFiltersList = numericFilters.filter(
      ({ column }) => column !== columnToRemove,
    );
    setNumericFilters(newNumericFiltersList);
  };

  const handleRemoveAllFilters = () => {
    setNumericFilters([]);
  };

  const handleSortColumnOnClick = () => {
    setSortPreference(localNumericOrderColumn);
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
      <Dropdown
        id="column-filter"
        name="column"
        label="Coluna"
        value={ localNumericFilters.column }
        options={ numericFiltersOptionsToRender }
        onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
        testId="column-filter"
      />
      <Dropdown
        id="comparison"
        name="comparison"
        label="Operador"
        value={ localNumericFilters.comparison }
        options={ ['maior que', 'menor que', 'igual a'] }
        onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
        testId="comparison-filter"
      />
      <label htmlFor="value">
        <input
          id="value"
          name="value"
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
      <Dropdown
        id="column-sort"
        name="column"
        label="Ordenar"
        value={ localNumericOrderColumn.column }
        onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
        testId="column-sort"
        options={ numericFiltersOptions }
      />
      <label htmlFor="sort-asc">
        Ascendente
        <input
          id="sort-asc"
          name="sort"
          type="radio"
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
        />
      </label>
      <label htmlFor="sort-desc">
        Descendente
        <input
          id="sort-desc"
          name="sort"
          type="radio"
          value="DESC"
          data-testid="column-sort-input-desc"
          onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleSortColumnOnClick }
      >
        Ordenar
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
