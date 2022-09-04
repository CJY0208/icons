import React from 'react'

export default function Card({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30z" fill="currentColor"/><path d="M424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56z" fill="currentColor"/></svg>
  )
}