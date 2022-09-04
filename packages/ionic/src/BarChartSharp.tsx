import React from 'react'

export default function BarChartSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M496 496H16V16h32v448h448v32z" fill="currentColor"/><path d="M192 432H80V208h112z" fill="currentColor"/><path d="M336 432H224V160h112z" fill="currentColor"/><path d="M479.64 432h-112V96h112z" fill="currentColor"/></svg>
  )
}