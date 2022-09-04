import React from 'react'

export default function MdInformation({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M232 235h48v137h-48z" fill="currentColor"/><path d="M232 140h48v48h-48z" fill="currentColor"/></svg>
  )
}