import React from 'react'

export default function MicCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm-48 128a48.14 48.14 0 0 1 48-48a48.14 48.14 0 0 1 48 48v64a48.14 48.14 0 0 1-48 48a48.14 48.14 0 0 1-48-48zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.71 103.71 0 0 1 272 334.26V352h32v32h-96v-32h32v-17.74a103.71 103.71 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208.3h32v39.92c0 25.66 28 55.48 64 55.48c29.6 0 64-24.23 64-55.48V208.3h32z" fill="currentColor"/></svg>
  )
}