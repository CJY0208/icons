import React from 'react'

export default function BowlingBall({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61zM288 224a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm8-72a24 24 0 1 1 24-24a24 24 0 0 1-24 24zm64 40a24 24 0 1 1 24-24a24 24 0 0 1-24 24z" fill="currentColor"/></svg>
  )
}