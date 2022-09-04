import React from 'react'

export default function Reload({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M29 16c0 6-5 13-13 13S3 22 3 16S8 3 16 3c5 0 9 3 11 6m-7 1l7-1l1-7"/></g></svg>
  )
}