import React from 'react'

export default function IosText({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256 64C141.1 64 48 139.2 48 232c0 64.9 45.6 121.2 112.3 149.2-5.2 25.8-21 47-33.5 60.5-2.3 2.5.2 6.5 3.6 6.3 11.5-.8 32.9-4.4 51-12.7 21.5-9.9 40.3-30.1 46.3-36.9 9.3 1 18.8 1.6 28.5 1.6 114.9 0 208-75.2 208-168C464 139.2 370.9 64 256 64z" fill="currentColor"/></svg>
  )
}