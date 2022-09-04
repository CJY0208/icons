import React from 'react'

export default function BowlingBallSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM286 230a28 28 0 1 1 28-28a28 28 0 0 1-28 28zm8-76a28 28 0 1 1 28-28a28 28 0 0 1-28 28zm68 44a28 28 0 1 1 28-28a28 28 0 0 1-28 28z" fill="currentColor"/></svg>
  )
}