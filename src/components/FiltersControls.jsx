import React, { useContext, useEffect, useMemo, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { numericFiltersOptions } from '../data';
import Logo from '../images/planets_search_logo.png';
import {
  FilterByComparisonDropdown,
  FilterByComparisonInput,
  RadioButtonsWrapper,
  FilterByNameInput,
  ControlsSection,
  FiltersButton,
  FilterWrapper,
  RadioButton,
  StarWarsImg,
  Wrapper,
} from '../styles/controls';

const NUMERIC_FILTERS_INITIAL_VALUE = {
  column: 'population',
  comparison: 'greater than',
  value: 0,
};

const NUMERIC_ORDER_COLUMN_INITIAL_VALUE = {
  column: 'population',
  sort: 'ASC',
};

function FiltersControls() {
  const {
    filterByName,
    setFilterByName,
    numericFilters,
    setNumericFilters,
    setSortPreference,
  } = useContext(PlanetsContext);

  const [localNumericFilters, setLocalNumericFilters] = useState(
    NUMERIC_FILTERS_INITIAL_VALUE,
  );

  const [localNumericOrderColumn, setlocalNumericOrderColumn] = useState(
    NUMERIC_ORDER_COLUMN_INITIAL_VALUE,
  );

  const numericFiltersOptionsToRender = useMemo(
    () =>
      numericFiltersOptions.filter(
        (columnItem) =>
          !numericFilters.map((filter) => filter.column).includes(columnItem),
      ),
    [numericFilters],
  );

  const handleFilterByNumericValuesOnChange = ({ name, value, id }) => {
    if (id === 'column-sort' || id === 'sort-asc' || id === 'sort-desc') {
      return setlocalNumericOrderColumn({
        ...localNumericOrderColumn,
        [name]: value,
      });
    }
    return setLocalNumericFilters({ ...localNumericFilters, [name]: value });
  };

  useEffect(() => {
    setLocalNumericFilters((prev) => ({
      ...prev,
      column: numericFiltersOptionsToRender[0],
    }));
  }, [numericFilters, numericFiltersOptionsToRender]);

  const handleFilterButtonOnClick = () => {
    if (!localNumericFilters.column) return;
    const newNumericFiltersList = [...numericFilters, localNumericFilters];
    setNumericFilters(newNumericFiltersList);
  };

  const handleRemoveAllFilters = () => {
    setNumericFilters([]);
  };

  const handleSortColumnOnClick = () => {
    setSortPreference(localNumericOrderColumn);
  };

  return (
    <ControlsSection>
      <StarWarsImg src={Logo} alt="StarWars Planets Search" />
      <FilterByNameInput
        id="name-filter"
        placeholder="Filter By Name"
        type="text"
        value={filterByName}
        testId="name-filter"
        onChange={({ target: { value } }) => setFilterByName(value)}
      />
      <FilterWrapper>
        <Wrapper>
          <FilterByComparisonDropdown
            id="column-sort"
            name="column"
            value={localNumericOrderColumn.column}
            onChange={({ target }) =>
              handleFilterByNumericValuesOnChange(target)
            }
            testId="column-sort"
            options={numericFiltersOptions}
          />
          <RadioButtonsWrapper>
            <RadioButton
              label="Ascending"
              id="sort-asc"
              name="sort"
              type="radio"
              value="ASC"
              testId="column-sort-input-asc"
              onChange={({ target }) =>
                handleFilterByNumericValuesOnChange(target)
              }
            />
            <RadioButton
              label="Descendant"
              id="sort-desc"
              name="sort"
              type="radio"
              value="DESC"
              testId="column-sort-input-desc"
              onChange={({ target }) =>
                handleFilterByNumericValuesOnChange(target)
              }
            />
          </RadioButtonsWrapper>
        </Wrapper>
        <FiltersButton
          label="Order By"
          testId="column-sort-button"
          onClick={handleSortColumnOnClick}
        />
      </FilterWrapper>
      <FilterWrapper>
        <Wrapper>
          <FilterByComparisonDropdown
            id="column-filter"
            name="column"
            value={localNumericFilters.column}
            options={numericFiltersOptionsToRender}
            onChange={({ target }) =>
              handleFilterByNumericValuesOnChange(target)
            }
            testId="column-filter"
          />
          <FilterByComparisonDropdown
            id="comparison"
            name="comparison"
            value={localNumericFilters.comparison}
            options={['greater than', 'less than', 'equal']}
            onChange={({ target }) =>
              handleFilterByNumericValuesOnChange(target)
            }
            testId="comparison-filter"
          />
          <FilterByComparisonInput
            id="value"
            name="value"
            testId="value-filter"
            type="number"
            value={localNumericFilters.value}
            onChange={({ target }) =>
              handleFilterByNumericValuesOnChange(target)
            }
          />
        </Wrapper>
        <FiltersButton
          label="Filter By Numbers"
          onClick={handleFilterButtonOnClick}
          testId="button-filter"
        />
      </FilterWrapper>
      <FiltersButton
        label="Remove All Filters"
        testId="button-remove-filters"
        onClick={handleRemoveAllFilters}
      />
    </ControlsSection>
  );
}

export default FiltersControls;
