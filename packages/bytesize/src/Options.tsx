import React from 'react'

export default function Options({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M28 6H4m24 10H4m24 10H4M24 3v6M8 13v6m12 4v6"/></g></svg>
  )
}