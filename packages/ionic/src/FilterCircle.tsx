import React from 'react'

export default function FilterCircle({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm32 304h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32zm48-64H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32zm32-64H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32z" fill="currentColor"/></svg>
  )
}