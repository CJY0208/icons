import React from 'react'

export default function PowerSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 464c-114.69 0-208-93.23-208-207.82a207.44 207.44 0 0 1 74.76-160.13l16.9-14l28.17 33.72l-16.9 14A163.72 163.72 0 0 0 92 256.18c0 90.39 73.57 163.93 164 163.93s164-73.54 164-163.93a163.38 163.38 0 0 0-59.83-126.36l-17-14l28-33.82l17 14A207.13 207.13 0 0 1 464 256.18C464 370.77 370.69 464 256 464z" fill="currentColor"/><path d="M234 48h44v224h-44z" fill="currentColor"/></svg>
  )
}