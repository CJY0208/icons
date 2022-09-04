import React from 'react'

export default function CircleFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><circle cx="8" cy="8" r="8"/></g></svg>
  )
}