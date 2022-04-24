import React, { useContext } from 'react';
import { BiTrash } from 'react-icons/bi';
import PlanetsContext from '../context/PlanetsContext';
import {
  DeleteFilterDiv,
  FilterNameDiv,
  FilterWrapper,
  Wrapper,
} from '../styles/filters';

export default function Filters() {
  const { numericFilters, setNumericFilters } = useContext(PlanetsContext);

  const handleRemoveNumericFilter = (columnToRemove) => {
    const newNumericFiltersList = numericFilters.filter(
      ({ column }) => column !== columnToRemove,
    );
    setNumericFilters(newNumericFiltersList);
  };

  return (
    <Wrapper>
      {numericFilters.map(({ column, comparison, value }) => (
        <FilterWrapper key={column}>
          <DeleteFilterDiv
            data-testid="filter"
            onClick={() => handleRemoveNumericFilter(column)}
          >
            <BiTrash size="1.2em" />
          </DeleteFilterDiv>
          <FilterNameDiv data-testid="filter">
            <p>{`${column} ${comparison} ${value}`}</p>
          </FilterNameDiv>
        </FilterWrapper>
      ))}
    </Wrapper>
  );
}
