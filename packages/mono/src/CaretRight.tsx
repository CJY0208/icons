import React from 'react'

export default function CaretRight({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M10 7l6 5l-6 5V7z" fill="currentColor"/></g></svg>
  )
}