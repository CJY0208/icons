import React from 'react'

export default function Temperature({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props} className={`c-icon ${className}`}><g fill="none"><path d="M9 5a3 3 0 1 1 6 0v8a5 5 0 1 1-6 0V5zm3-1a1 1 0 0 0-1 1v8.535a1 1 0 0 1-.5.866a3 3 0 1 0 2.999 0a1 1 0 0 1-.499-.866V5a1 1 0 0 0-1-1z" fill="currentColor"/></g></svg>
  )
}