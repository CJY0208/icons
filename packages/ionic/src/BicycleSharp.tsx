import React from 'react'

export default function BicycleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M320 192l-29.5-60.1C284.32 118 284.32 118 264 118c-13.26 0-14.76 0-23 7.3l-71.7 69.1c-8.3 8.45-9.3 9.45-9.3 26.6c0 12.67 3.78 14.61 18.51 22.9L240 278v90h32V254s-29-17-48.3-30l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H384v-32z" fill="currentColor"/><path d="M388 448a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92zm0-152a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60z" fill="currentColor"/><path d="M124 448a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92zm0-152a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60z" fill="currentColor"/><path d="M320 128a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 64a32 32 0 1 0-.2 64z" fill="currentColor"/></svg>
  )
}