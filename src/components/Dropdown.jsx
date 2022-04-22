import React from 'react';
import PropTypes from 'prop-types';

function Dropdown(props) {
  const { id, name, label, value, onChange, testId, options } = props;
  return (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        data-testid={testId}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dropdown;
