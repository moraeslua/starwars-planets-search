import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { numericFiltersOptions } from '../data';
import Dropdown from './Dropdown';
import Button from './Button';
import Input from './Input';

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
      <Input
        label="Filtrar por nome"
        id="name-filter"
        type="text"
        value={ filterByName }
        testId="name-filter"
        onChange={ ({ target: { value } }) => setFilterByName(value) }
      />
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
      <Input
        id="value"
        name="value"
        type="number"
        value={ localNumericFilters.value }
        testId="value-filter"
        onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
      />
      <Button
        label="Filtrar"
        onClick={ handleFilterButtonOnClick }
        testId="button-filter"
      />
      <Button
        label="Remover todos os filtros"
        testId="button-remove-filters"
        onClick={ handleRemoveAllFilters }
      />
      <Dropdown
        id="column-sort"
        name="column"
        label="Ordenar"
        value={ localNumericOrderColumn.column }
        onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
        testId="column-sort"
        options={ numericFiltersOptions }
      />
      <Input
        label="Ascendente"
        id="sort-asc"
        name="sort"
        type="radio"
        value="ASC"
        testId="column-sort-input-asc"
        onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
      />
      <Input
        label="Descendente"
        id="sort-desc"
        name="sort"
        type="radio"
        value="DESC"
        testId="column-sort-input-desc"
        onChange={ ({ target }) => handleFilterByNumericValuesOnChange(target) }
      />
      <Button
        label="Ordenar"
        testId="column-sort-button"
        onClick={ handleSortColumnOnClick }
      />
      {numericFilters.map(({ column, comparison, value }) => (
        <div key={ column } data-testid="filter">
          <p>
            {column}
            {' '}
            {comparison}
            {' '}
            {value}
          </p>
          <Button
            label="X"
            onClick={ () => handleRemoveNumericFilter(column) }
          />
        </div>
      ))}
    </section>
  );
}

export default Header;
