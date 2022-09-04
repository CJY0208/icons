import React from 'react'

export default function QrCode({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M2 2h2v2H2V2z"/><path d="M6 0v6H0V0h6zM5 1H1v4h4V1zM4 12H2v2h2v-2z"/><path d="M6 10v6H0v-6h6zm-5 1v4h4v-4H1zm11-9h2v2h-2V2z"/><path d="M10 0v6h6V0h-6zm5 1v4h-4V1h4zM8 1V0h1v2H8v2H7V1h1zm0 5V4h1v2H8zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6zm0 0v1H2V8H1v1H0V7h3v1h3zm10 1h-1V7h1v2zm-1 0h-1v2h2v-1h-1V9zm-4 0h2v1h-1v1h-1V9zm2 3v-1h-1v1h-1v1H9v1h3v-2h1zm0 0h3v1h-2v1h-1v-2zm-4-1v1h1v-2H7v1h2z"/><path d="M7 12h1v3h4v1H7v-4zm9 2v2h-3v-1h2v-1h1z"/></g></svg>
  )
}