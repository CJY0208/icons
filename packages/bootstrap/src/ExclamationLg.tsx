import React from 'react'

export default function ExclamationLg({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0z"/></g></svg>
  )
}