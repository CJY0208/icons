import React from 'react'

export default function ColorFillSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M416 320s-64 48-64 99.84c0 33.28 28.67 60.16 64 60.16s64-27 64-60.16C480 368 416 320 416 320z" fill="currentColor"/><path d="M144 32l-76 76l70 70L32 280l176 184l152.8-148.3L416 304zm24 116l-39.6-41l15.88-15.89L184 132z" fill="currentColor"/></svg>
  )
}