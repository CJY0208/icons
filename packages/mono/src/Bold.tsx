import React from 'react'

export default function Bold({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M7 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6.5a4.5 4.5 0 0 0 1.545-8.728A4.5 4.5 0 0 0 11.5 4H7zm4.5 7H8V6h3.5a2.5 2.5 0 0 1 0 5zM8 13h5.5a2.5 2.5 0 0 1 0 5H8v-5z" fill="currentColor"/></g></svg>
  )
}