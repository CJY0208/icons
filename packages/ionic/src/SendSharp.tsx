import React from 'react'

export default function SendSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M16 464l480-208L16 48v160l320 48l-320 48z" fill="currentColor"/></svg>
  )
}