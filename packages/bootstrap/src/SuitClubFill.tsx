import React from 'react'

export default function SuitClubFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254a19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907a3.5 3.5 0 1 1-2.538-5.743a3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/></g></svg>
  )
}