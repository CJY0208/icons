import React from 'react'

export default function ZoomIn({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="14" cy="14" r="12"/><path d="M23 23l7 7"/><path d="M14 10v8m-4-4h8"/></g></svg>
  )
}