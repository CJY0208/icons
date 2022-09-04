import React from 'react'

export default function StopwatchSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M280 81.5V48h-48v33.5a191 191 0 0 0-84.43 32.13L120 86l-34 34l25.59 25.59A191.17 191.17 0 0 0 64 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5zM256 320a48 48 0 0 1-16-93.25V136h32v90.75A48 48 0 0 1 256 320z" fill="currentColor"/></svg>
  )
}