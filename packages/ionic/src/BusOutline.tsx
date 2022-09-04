import React from 'react'

export default function BusOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><rect x="80" y="112" width="352" height="192" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><rect x="80" y="304" width="352" height="128" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M400 112H112a32.09 32.09 0 0 1-32-32h0a32.09 32.09 0 0 1 32-32h288a32.09 32.09 0 0 1 32 32h0a32.09 32.09 0 0 1-32 32z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M144 432v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M416 432v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="368" cy="368" r="16" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><circle cx="144" cy="368" r="16" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 112v192"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 80v288"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M432 80v288"/></svg>
  )
}