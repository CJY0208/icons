import React from 'react'

export default function LogoDeviantart({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M408 103.28V16h-89.31l-8.9 8.78l-42.15 78.48l-13.25 8.74H104v119.85h82.68l7.36 8.71L104 408.72V496h89.3l8.91-8.79l42.14-78.48l13.26-8.73H408V280.13h-82.68l-7.36-8.75L408 103.28z" fill="currentColor"/></svg>
  )
}