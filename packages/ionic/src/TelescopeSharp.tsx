import React from 'react'

export default function TelescopeSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M1.41 292.9l44.82 76.97l98.14-56.38l-44.73-77.37L1.41 292.9z" fill="currentColor"/><path d="M287.87 252.34l23.67-13.81l-63.42-110l-132.92 77C133.75 237.51 176 310 176 310l15.53-8.32c.24-.13.55 0 .83 0L102.65 496h35.16l99.05-214.25l23.24-13.4L358 464h36z" fill="currentColor"/><path d="M262.08 96c24.81 42.23 60.25 104.25 86.4 148.76L510.79 151L424.07 1.41z" fill="currentColor"/></svg>
  )
}