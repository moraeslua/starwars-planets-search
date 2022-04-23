import React from 'react';
import PropTypes from 'prop-types';

function Dropdown(props) {
  const { id, name, label, value, onChange, testId, options, className } =
    props;
  return (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        name={name}
        className={className}
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
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Dropdown.defaultProps = {
  className: null,
  label: '',
};

export default Dropdown;
