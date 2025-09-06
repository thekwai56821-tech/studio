import * as React from 'react'

const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120" {...props}>
      <path
        d="M50 0L95 20V60C95 90 65 115 50 120C35 115 5 90 5 60V20L50 0Z"
        fill="#00008B"
      />
      <path
        d="M50 4L91 22.4V59.4C91 86.4 63.4 109 50 113.4C36.6 109 9 86.4 9 59.4V22.4L50 4Z"
        fill="none"
        strokeWidth="2"
      >
        <animate attributeName="d" dur="0s" to="M50 4L91 22.4V59.4C91 86.4 63.4 109 50 113.4C36.6 109 9 86.4 9 59.4V22.4L50 4Z" fill="freeze" />
      </path>
      <defs>
        <clipPath id="shield-clip-inner">
          <path d="M50 4L91 22.4V59.4C91 86.4 63.4 109 50 113.4C36.6 109 9 86.4 9 59.4V22.4L50 4Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#shield-clip-inner)">
        <rect width="100" height="40" y="0" fill="#FECB00" />
        <rect width="100" height="40" y="40" fill="#34B233" />
        <rect width="100" height="40" y="80" fill="#EA2839" />
        <path
          d="M50 42.5L57.55 57.45L74.2 59.8L61.1 71.9L65.1 88.55L50 80.2L34.9 88.55L38.9 71.9L25.8 59.8L42.45 57.45L50 42.5Z"
          fill="white"
        />
      </g>
    </svg>
  );
  
export default ShieldIcon;
