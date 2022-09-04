import React from 'react'

export default function BalloonOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M414.11 153.82C429.66 264.4 345.85 357.09 282.54 366s-169.48-57.5-185-167.68a159.82 159.82 0 1 1 316.53-44.49z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M236.06 308.05c-32.83-13-67.08-43.1-82.27-85.46" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M367.7 495.78c-32.83-13-63.31-40.06-78.5-82.41" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M266.71 368.21l-9.17 49.61l63.31-8.9l-22.49-45.16l-31.65 4.45z"/></svg>
  )
}