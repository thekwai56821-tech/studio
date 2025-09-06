import * as React from 'react'

const PagodaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 21h20" />
    <path d="M5 21V16.6C5 14.5 6.5 13 8 13h8c1.5 0 3 1.5 3 3.6V21" />
    <path d="M12 13V10" />
    <path d="M10 10h4" />
    <path d="M8 10c0-2 2-4 4-4s4 2 4 4" />
    <path d="M12 6V4" />
    <path d="M12 2l.5 2" />
  </svg>
)

export default PagodaIcon
