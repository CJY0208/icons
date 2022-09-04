import React from 'react'

export default function FlashOffSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998z" fill="currentColor"/><path d="M80 304h144l-32 192l108.18-129.82l-148.36-148.36L80 304z" fill="currentColor"/><path d="M432 208H288l32-192l-108.18 129.82l148.36 148.36L432 208z" fill="currentColor"/></svg>
  )
}