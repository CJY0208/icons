import React from 'react'

export default function PersonDashFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path fillRule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/><path d="M1 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1H1zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"/></g></svg>
  )
}