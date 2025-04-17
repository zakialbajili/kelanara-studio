import React from "react";
const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-pause-icon lucide-pause"
  >
    <path
      d="M2 22.5776V5.42245C2 3.98314 2 3.26349 2.30059 2.86325C2.56251 2.51449 2.96326 2.29701 3.39841 2.26747C3.89781 2.23357 4.5012 2.62578 5.70798 3.41018L18.9042 11.9877C19.936 12.6584 20.4519 12.9937 20.6305 13.419C20.7867 13.7906 20.7867 14.2094 20.6305 14.581C20.4519 15.0063 19.936 15.3416 18.9042 16.0123L5.70797 24.5898C4.50119 25.3742 3.89781 25.7664 3.39841 25.7325C2.96326 25.703 2.56251 25.4855 2.30059 25.1368C2 24.7365 2 24.0169 2 22.5776Z"
      stroke="white"
      strokeWidth="3"
    />
  </svg>
);

export default PlayIcon;
