import React from 'react'

export default function ZoomOut({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`c-icon ${className}`}><g fill="currentColor"><path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0z"/><path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1a6.538 6.538 0 0 1-1.398 1.4z"/><path fillRule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/></g></svg>
  )
}