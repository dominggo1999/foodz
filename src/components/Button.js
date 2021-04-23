import React from 'react';

const Button = ({ handleClick, children, type }) => {
  return (
    <button
      className={`btn btn-${type || 'transparent'}`}
      onClick={handleClick}
    >{children}
    </button>
  );
};

export default Button;
