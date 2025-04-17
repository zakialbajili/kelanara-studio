import React from "react";
const HamburgerMenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6H28"
      stroke="#333333"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M4 16H28"
      stroke="#87CEEB"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M4 26H28"
      stroke="#333333"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export default HamburgerMenuIcon;
