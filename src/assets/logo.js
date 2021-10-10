import React from "react";

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="43"
      fill={props.fill}
    >
      <path
        d="M3420.62 1768.86c-221.3-372.11-625.64-599.59-1087.86-599.59-699.74 0-1245.34 538.43-1245.34 1242.72 0 704.29 545.6 1296.9 1245.34 1296.9 462.22 0 866.56-270.82 1087.86-642.93h634.24c-262.11 694.44-940.2 1188.03-1722.1 1188.03-1010.74 0-1851.773-824.69-1851.773-1842s841.033-1842 1851.773-1842c781.9 0 1459.99 504.428 1722.1 1198.868h-634.24v.002zM4369 2195.29l-638.98 455.08h-801.66c-93.37 240.88-327.09 411.74-600.84 411.74-355.89 0-644.39-288.64-644.39-644.7 0-356.06 288.5-644.7 644.39-644.7 277.87 0 514.64 175.96 605.11 422.58H4369z"
        transform="matrix(.01157 0 0 .01157 0 .18) translate(-481 -570)"
      ></path>
    </svg>
  );
}

export default Logo;