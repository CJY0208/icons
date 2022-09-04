import React from 'react'

export default function CloudCircleSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48zm70 280H196c-33 0-60-23-60-56c0-34.21 26-53 56-56c7.28-23.9 29.5-48 64-48c36.5 0 67.55 27.23 72 72c21.49 1.12 48 14.09 48 44c0 30.28-22.5 44-50 44z" fill="currentColor"/></svg>
  )
}