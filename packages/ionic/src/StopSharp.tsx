import React from 'react'

export default function StopSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M80 80h352v352H80z" fill="currentColor"/></svg>
  )
}