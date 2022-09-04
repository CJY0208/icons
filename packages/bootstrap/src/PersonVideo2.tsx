import React from 'react'

export default function PersonVideo2({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M10 9.05a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5z"/><path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zM1 3a1 1 0 0 1 1-1h2v2H1V3zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5zm-4-2h3v2H2a1 1 0 0 1-1-1v-1zm3-1H1V8h3v2zm0-3H1V5h3v2z"/></g></svg>
  )
}