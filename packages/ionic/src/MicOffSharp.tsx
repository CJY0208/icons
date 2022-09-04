import React from 'react'

export default function MicOffSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32" d="M432 400L96 64"/><path d="M368 192v48a111.74 111.74 0 0 1-2.93 25.45L390.65 291a143.07 143.07 0 0 0 9.35-51v-48z" fill="currentColor"/><path d="M272 432v-48.89a143.11 143.11 0 0 0 56.65-18.83L305 340.65A112.13 112.13 0 0 1 144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32z" fill="currentColor"/><path d="M336 236.37V128c0-44.86-35.14-80-80-80a79.68 79.68 0 0 0-69 39.34" fill="currentColor"/><path d="M176 211.63V239a80.89 80.89 0 0 0 23.45 56.9a78.55 78.55 0 0 0 81 20.21z" fill="currentColor"/></svg>
  )
}