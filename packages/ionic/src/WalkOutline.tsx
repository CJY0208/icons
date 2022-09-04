import React from 'react'

export default function WalkOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M314.21 482.32l-56.77-114.74l-44.89-57.39a72.82 72.82 0 0 1-10.13-37.05V144h15.67a40.22 40.22 0 0 1 40.23 40.22v183.36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M127.9 293.05v-74.52S165.16 144 202.42 144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M370.1 274.42L304 231"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M170.53 478.36L224 400"/><circle cx="258.32" cy="69.48" r="37.26" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}