import React from 'react'

export default function CodeSlashSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M161.98 397.63L0 256l161.98-141.63l27.65 31.61L64 256l125.63 110.02l-27.65 31.61z" fill="currentColor"/><path d="M350.02 397.63l-27.65-31.61L448 256L322.37 145.98l27.65-31.61L512 256L350.02 397.63z" fill="currentColor"/><path d="M222.15 442L182 430.08L289.85 70L330 81.92L222.15 442z" fill="currentColor"/></svg>
  )
}