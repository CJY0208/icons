import React from 'react'

export default function Cloud({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M5 10a6 6 0 0 1 11.671-1.963A6 6 0 0 1 16 20H7a5 5 0 0 1-1.986-9.59A6.071 6.071 0 0 1 5 10zm6-4a4 4 0 0 0-3.903 4.879a1 1 0 0 1-.757 1.194A3.002 3.002 0 0 0 7 18h9a4 4 0 1 0-.08-8a1 1 0 0 1-1-.8A4.002 4.002 0 0 0 11 6z" fill="currentColor"/></g></svg>
  )
}