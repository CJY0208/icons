import React from 'react'

export default function LayersSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M480 150L256 48L32 150l224 104l224-104z" fill="currentColor"/><path d="M255.71 392.95l-144.81-66.2L32 362l224 102l224-102l-78.69-35.3l-145.6 66.25z" fill="currentColor"/><path d="M480 256l-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102l224-102z" fill="currentColor"/></svg>
  )
}