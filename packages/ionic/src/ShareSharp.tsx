import React from 'react'

export default function ShareSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M272 176v161h-32V176H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12z" fill="currentColor"/><path d="M272 92.63l64 64L358.63 134L256 31.37L153.37 134L176 156.63l64-64V176h32V92.63z" fill="currentColor"/></svg>
  )
}