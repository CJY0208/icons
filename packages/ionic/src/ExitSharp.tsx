import React from 'react'

export default function ExitSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M335.69 272h-161v-32h161V92a12 12 0 0 0-12-12h-280a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h280a12 12 0 0 0 12-12z" fill="currentColor"/><path d="M419.06 272l-64 64l22.63 22.63L480.31 256L377.69 153.37L355.06 176l64 64h-83.37v32h83.37z" fill="currentColor"/></svg>
  )
}