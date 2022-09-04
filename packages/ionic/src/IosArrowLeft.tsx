import React from 'react'

export default function IosArrowLeft({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z" fill="currentColor"/></svg>
  )
}