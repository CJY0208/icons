import React from 'react'

export default function CloudOfflineOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M93.72 183.25C49.49 198.05 16 233.1 16 288c0 66 54 112 120 112h184.37" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M467.82 377.74C485.24 363.3 496 341.61 496 312c0-59.82-53-85.76-96-88c-8.89-89.54-71-144-144-144c-26.16 0-48.79 6.93-67.6 18.14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M448 448L64 64"/></svg>
  )
}