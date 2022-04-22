import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { label, id, name, type, value, testId, onChange } = props;
  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        data-testid={testId}
        onChange={onChange}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  testId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: '',
  name: '',
};

export default Input;
