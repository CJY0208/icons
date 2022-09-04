import React from 'react'

export default function Pen({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M17.707 2.293a1 1 0 0 0-1.414 0L14 4.586l-1.293-1.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L12 5.414l.586.586l-2.293 2.293l-7 7A1 1 0 0 0 3 16v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l7-7l6-6a1 1 0 0 0 0-1.414l-4-4zm-3 4.414L17 4.414L19.586 7L15 11.586L12.414 9l2.293-2.293zM5 16.414l6-6L13.586 13l-6 6H5v-2.586z" fill="currentColor"/></g></svg>
  )
}