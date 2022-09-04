import React from 'react'

export default function CaretLeft({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M14 17l-6-5l6-5v10z" fill="currentColor"/></g></svg>
  )
}