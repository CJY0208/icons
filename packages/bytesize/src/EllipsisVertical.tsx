import React from 'react'

export default function EllipsisVertical({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="16" cy="7" r="2"/><circle cx="16" cy="16" r="2"/><circle cx="16" cy="25" r="2"/></g></svg>
  )
}