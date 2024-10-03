import { className } from 'postcss-selector-parser'

export default function BackArrow({ className }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" stroke="#403F4C" />
      <path
        d="M18.1468 15.5566L13.332 20.3715L18.1468 25.1863"
        stroke="#403F4C"
        stroke-linecap="round"
      />
      <path d="M25.5543 20.3711H13.332" stroke="#403F4C" stroke-linecap="round" />
    </svg>
  )
}
