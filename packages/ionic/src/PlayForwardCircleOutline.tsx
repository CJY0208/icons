import React from 'react'

export default function PlayForwardCircleOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M394.77 246.7l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L264 271.81v53.32a10.78 10.78 0 0 0 16.32 9.31l114.45-69.14a10.89 10.89 0 0 0 0-18.6z" fill="currentColor"/></svg>
  )
}