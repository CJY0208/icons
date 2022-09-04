import React from 'react'

export default function Reply({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 6l-7 8l7 8m-7-8h15c8 0 12 4 12 12"/></g></svg>
  )
}