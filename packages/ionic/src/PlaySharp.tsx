import React from 'react'

export default function PlaySharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M96 448l320-192L96 64v384z" fill="currentColor"/></svg>
  )
}