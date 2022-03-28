import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { label, testId, onClick } = props;
  return (
    <button
      type="button"
      data-testid={ testId }
      onClick={ onClick }
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  testId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  testId: '',
};

export default Button;
