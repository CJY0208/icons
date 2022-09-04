import React from 'react'

export default function IosHomeOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 112L96 240v208h112V320h96v128h112V240L256 112zm144 320h-80V304H192v128h-80V247.69l144-115.2 144 115.2V432z" fill="currentColor"/><path d="M256 64l-96 76.8V96H96v95.999l-32 25.499 11.51 11.384L256 84.49l180.49 144.393L448 217.498 256 64zm-112 89.599l-32 25.6V112h32v41.599z" fill="currentColor"/></svg>
  )
}