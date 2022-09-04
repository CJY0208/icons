import React from 'react'

export default function LogoWebComponent({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path fill="none" d="M179.9 388l-76.16-132l76.16 132z"/><path fill="none" d="M179.9 388h152.21l76.15-132l-76.15-132H179.9l-76.16 132l76.16 132z"/><path fill="none" d="M103.74 256l76.16-132l-76.16 132z"/><path d="M496 256L376 48H239.74l-43.84 76h136.21l76.15 132l-76.15 132H195.9l43.84 76H376l120-208z" fill="currentColor"/><path d="M179.9 388l-76.16-132l76.16-132l43.84-76H136L16 256l120 208h87.74l-43.84-76z" fill="currentColor"/></svg>
  )
}