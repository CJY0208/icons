import React from 'react'

export default function PushSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M272 352V204.63l64 64L358.63 246L256 143.37L153.37 246L176 268.63l64-64V352H92a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h328a12 12 0 0 1 12 12v296a12 12 0 0 1-12 12z" fill="currentColor"/><path d="M240 352h32v128h-32z" fill="currentColor"/></svg>
  )
}