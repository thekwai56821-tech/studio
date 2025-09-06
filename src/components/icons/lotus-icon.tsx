import * as React from 'react'

const LotusIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M8.5 20.5C5.5 20.5 3 18.5 3 15.5C3 12.5 5.5 10.5 8.5 10.5" />
    <path d="M15.5 20.5C18.5 20.5 21 18.5 21 15.5C21 12.5 18.5 10.5 15.5 10.5" />
    <path d="M12 15.5C12 12.5 9.5 5.5 12 3C14.5 5.5 12 12.5 12 15.5Z" />
  </svg>
)

export default LotusIcon
