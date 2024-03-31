import React from 'react';

const Plus = ({ width, height, color }) => {
  return (
    <svg
      width={width ? width : '16'}
      height={height ? height : '16'}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.52951 14V7.5M7.52951 7.5V1M7.52951 7.5H14.059M7.52951 7.5H1"
        stroke={color ? color : 'white'}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Plus;
