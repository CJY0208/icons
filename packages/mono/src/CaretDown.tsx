import React from 'react'

export default function CaretDown({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M17 10l-5 6l-5-6h10z" fill="currentColor"/></g></svg>
  )
}