import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { starWarsTableHeading } from '../data';
import { Table as StyledTable, Thead, Tbody } from '../styles/table';

function Table() {
  const { planetsListToRender } = useContext(PlanetsContext);

  return (
    <StyledTable>
      <Thead>
        <tr>
          {starWarsTableHeading.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </Thead>
      <Tbody>
        {planetsListToRender.map((planet) => (
          <tr key={planet.name}>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
          </tr>
        ))}
      </Tbody>
    </StyledTable>
  );
}

export default Table;
