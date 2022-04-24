import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    label,
    placeholder,
    id,
    name,
    type,
    value,
    testId,
    onChange,
    className,
  } = props;
  return (
    <label htmlFor={id}>
      <input
        id={id}
        name={name}
        className={className}
        placeholder={placeholder || ''}
        type={type}
        value={value}
        data-testid={testId}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  testId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: '',
  name: '',
  placeholder: '',
  className: null,
};

export default Input;
