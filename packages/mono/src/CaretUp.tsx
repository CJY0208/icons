import React from 'react'

export default function CaretUp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`kl-icon ${className}`}><g fill="none"><path d="M7 14l5-6l5 6H7z" fill="currentColor"/></g></svg>
  )
}