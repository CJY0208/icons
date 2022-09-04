import React from 'react'

export default function Cart({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`c-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 6h24l-3 13H9m18 4H10L5 2H2"/><circle cx="25" cy="27" r="2"/><circle cx="12" cy="27" r="2"/></g></svg>
  )
}