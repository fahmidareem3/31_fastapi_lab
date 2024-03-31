import React from 'react';

const LinkIcon = ({ color }) => {
  return (
    <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.894518 0V1.15384H5.85027L0.317596 6.68652L1.13106 7.49998L6.66373 1.9673V6.92306H7.81758V0H0.894518Z"
        fill={color ? color : 'white'}
      />
    </svg>
  );
};

export default LinkIcon;
