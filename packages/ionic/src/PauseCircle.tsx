import React from 'react'

export default function PauseCircle({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm-32 272a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0zm96 0a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0z" fill="currentColor"/></svg>
  )
}