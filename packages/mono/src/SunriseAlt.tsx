import React from 'react'

export default function SunriseAlt({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M13 5a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V5zM9.028 19H3a1 1 0 1 1 0-2h3.803a6 6 0 1 1 10.394 0H21a1 1 0 1 1 0 2H9.028zM12 10a4 4 0 0 0-2.646 7h5.292A4 4 0 0 0 12 10zm7.071-1.657l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 1 1 1.414 1.414z" fill="currentColor"/><path d="M4 15a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2h1zm18-1a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zM5.636 9.05A1 1 0 0 0 7.05 7.636l-.707-.707A1 1 0 1 0 4.93 8.343l.707.707z" fill="currentColor"/></g></svg>
  )
}