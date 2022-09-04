import React from 'react'

export default function NuclearSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><circle cx="256" cy="256" r="48" fill="currentColor"/><path d="M223.47 335.59l-51.71 68a169.73 169.73 0 0 0 168.48 0l-51.71-68" fill="none"/><path d="M403.08 108.92a208 208 0 0 0-294.16 294.16a208 208 0 0 0 294.16-294.16zM342 256a86.13 86.13 0 0 1-53.47 79.59l51.71 68a169.73 169.73 0 0 1-168.48 0l51.71-68a86 86 0 0 1-50.56-101.77l-85.48.09a170.21 170.21 0 0 1 73.83-119l37.94 76.59a85.78 85.78 0 0 1 113.6 0l37.94-76.59a170.21 170.21 0 0 1 73.83 119l-85.48-.09A85.87 85.87 0 0 1 342 256z" fill="currentColor"/></svg>
  )
}