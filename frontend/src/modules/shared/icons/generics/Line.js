import React from 'react';

const Line = ({ width }) => {
  return (
    <svg
      viewBox="0 0 1280 348"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={width}
    >
      <path
        d="M-70.9437 314C-80.9729 -293.324 1251.63 733.343 1265 34"
        stroke="url(#paint0_angular_73_43)"
        stroke-width="68"
        stroke-linecap="round"
      />
      <defs>
        <radialGradient
          id="paint0_angular_73_43"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(648.84 500) rotate(115.672) scale(48.871 234.614)"
        >
          <stop offset="0.0795771" stop-color="#EBB321" />
          <stop offset="0.473415" stop-color="white" stop-opacity="0.17" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Line;
