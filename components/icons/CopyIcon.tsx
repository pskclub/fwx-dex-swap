import React from 'react'

export const CopyIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9463_206675)">
        <path
          d="M17.75 6H4.25C4.05109 6 3.86032 6.07902 3.71967 6.21967C3.57902 6.36032 3.5 6.55109 3.5 6.75V20.25C3.5 20.4489 3.57902 20.6397 3.71967 20.7803C3.86032 20.921 4.05109 21 4.25 21H17.75C17.9489 21 18.1397 20.921 18.2803 20.7803C18.421 20.6397 18.5 20.4489 18.5 20.25V6.75C18.5 6.55109 18.421 6.36032 18.2803 6.21967C18.1397 6.07902 17.9489 6 17.75 6ZM17 19.5H5V7.5H17V19.5ZM21.5 3.75V17.25C21.5 17.4489 21.421 17.6397 21.2803 17.7803C21.1397 17.921 20.9489 18 20.75 18C20.5511 18 20.3603 17.921 20.2197 17.7803C20.079 17.6397 20 17.4489 20 17.25V4.5H7.25C7.05109 4.5 6.86032 4.42098 6.71967 4.28033C6.57902 4.13968 6.5 3.94891 6.5 3.75C6.5 3.55109 6.57902 3.36032 6.71967 3.21967C6.86032 3.07902 7.05109 3 7.25 3H20.75C20.9489 3 21.1397 3.07902 21.2803 3.21967C21.421 3.36032 21.5 3.55109 21.5 3.75Z"
          fill="#F4F4F6"
        />
      </g>
      <defs>
        <clipPath id="clip0_9463_206675">
          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}
