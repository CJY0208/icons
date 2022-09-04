import React from 'react'

export default function ThermometerSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M320 291.24V80a64 64 0 1 0-128 0v211.24A113.39 113.39 0 0 0 144 384a112 112 0 0 0 224 0a113.39 113.39 0 0 0-48-92.76zM256 432a48 48 0 0 1-16-93.26V96h32v242.74A48 48 0 0 1 256 432z" fill="currentColor"/></svg>
  )
}