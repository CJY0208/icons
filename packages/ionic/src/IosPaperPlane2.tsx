import React from 'react'

export default function IosPaperPlane2({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M96 249.6l106 46.7L416 96z" fill="currentColor"/><path d="M416 96L217.9 311.7 269.8 416z" fill="currentColor"/></svg>
  )
}