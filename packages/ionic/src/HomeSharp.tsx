import React from 'react'

export default function HomeSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M416 174.74V48h-80v58.45L256 32L0 272h64v208h144V320h96v160h144V272h64l-96-97.26z" fill="currentColor"/></svg>
  )
}