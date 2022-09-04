import React from 'react'

export default function PaperPlaneSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M496 16L15.88 208L195 289L448 64L223 317l81 179L496 16z" fill="currentColor"/></svg>
  )
}