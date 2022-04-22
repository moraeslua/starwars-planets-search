import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import { starWarsTableHeading } from '../data';

function Table() {
  const { planetsListToRender } = useContext(PlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          {starWarsTableHeading.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
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
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
