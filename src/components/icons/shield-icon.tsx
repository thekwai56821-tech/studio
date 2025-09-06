import * as React from 'react'

const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" {...props}>
      <defs>
        <clipPath id="shield-clip">
          <path d="M50 0L95 20V60C95 90 65 115 50 120C35 115 5 90 5 60V20L50 0Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#shield-clip)">
        <rect width="100" height="40" y="0" fill="#FECB00" />
        <rect width="100" height="40" y="40" fill="#34B233" />
        <rect width="100" height="40" y="80" fill="#EA2839" />
        <path
          d="M50 42.5L57.55 57.45L74.2 59.8L61.1 71.9L65.1 88.55L50 80.2L34.9 88.55L38.9 71.9L25.8 59.8L42.45 57.45L50 42.5Z"
          fill="white"
        />
      </g>
      <path
        d="M50 0L95 20V60C95 90 65 115 50 120C35 115 5 90 5 60V20L50 0Z"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="4"
      />
    </svg>
  );
  
export default ShieldIcon;
