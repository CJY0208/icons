import React from 'react'

export default function EnterSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M160 240h147.37l-64-64L266 153.37L368.63 256L266 358.63L243.37 336l64-64H160v148a12 12 0 0 0 12 12h296a12 12 0 0 0 12-12V92a12 12 0 0 0-12-12H172a12 12 0 0 0-12 12z" fill="currentColor"/><path d="M32 240h128v32H32z" fill="currentColor"/></svg>
  )
}