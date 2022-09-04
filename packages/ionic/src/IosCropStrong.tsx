import React from 'react'

export default function IosCropStrong({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M128 64h32v48h-32z" fill="currentColor"/><path d="M160 352V176h-32v208h208v-32z" fill="currentColor"/><path d="M400 352h48v32h-48z" fill="currentColor"/><path d="M64 128v32h288v288h32V128z" fill="currentColor"/></svg>
  )
}