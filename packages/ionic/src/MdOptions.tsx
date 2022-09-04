import React from 'react'

export default function MdOptions({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M32 384h272v32H32z" fill="currentColor"/><path d="M400 384h80v32h-80z" fill="currentColor"/><path d="M384 447.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" fill="currentColor"/><g><path d="M32 240h80v32H32z" fill="currentColor"/><path d="M208 240h272v32H208z" fill="currentColor"/><path d="M192 303.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" fill="currentColor"/></g><g><path d="M32 96h272v32H32z" fill="currentColor"/><path d="M400 96h80v32h-80z" fill="currentColor"/><path d="M384 159.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" fill="currentColor"/></g></svg>
  )
}