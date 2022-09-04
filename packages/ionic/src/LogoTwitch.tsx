import React from 'react'

export default function LogoTwitch({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32zm336 256l-64 64h-96l-64 64v-64h-80V80h304z" fill="currentColor"/><path d="M320 143h48v129h-48z" fill="currentColor"/><path d="M208 143h48v129h-48z" fill="currentColor"/></svg>
  )
}