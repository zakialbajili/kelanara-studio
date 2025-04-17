import React from "react";
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    className="lucide lucide-x-icon lucide-x"
  >
    <path d="M18 6 6 18" strokeWidth="4"/>
    <path d="m6 6 12 12" stroke="#87CEEB" strokeWidth="4" />
  </svg>
);

export default XIcon;
