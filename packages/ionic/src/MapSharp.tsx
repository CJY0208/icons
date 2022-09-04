import React from 'react'

export default function MapSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M327.71 130.93L184 39L32 144v336l152.29-98.93L328 473l152-105V32zM312 421l-112-72V91l112 72z" fill="currentColor"/></svg>
  )
}