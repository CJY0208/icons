import React from 'react'

export default function Bell({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 17c0-5 1-11 8-11s8 6 8 11s3 8 3 8H5s3-3 3-8zm12 8s0 4-4 4s-4-4-4-4m4-22v3"/></g></svg>
  )
}