import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import starWarsTableCell from '../data';

function Table({ filteredPlanetsByName }) {
  const { planets } = useContext(PlanetsContext);
  const planetsToRender = filteredPlanetsByName || planets;

  return (
    <table>
      <thead>
        <tr>
          {starWarsTableCell.map((cell) => <th key={ cell }>{ cell }</th>)}
        </tr>
      </thead>
      <tbody>
        {planetsToRender.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
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

Table.propTypes = {
  filteredPlanetsByName: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Table;
