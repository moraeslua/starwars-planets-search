import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { label, testId, onClick, className } = props;
  return (
    <button
      className={className}
      type="button"
      data-testid={testId}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  testId: '',
  className: null,
};

export default Button;
