import React from 'react'

export default function StopwatchOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 232v-80"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M256 88V72"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M132 132l-12-12"/><circle cx="256" cy="272" r="32" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M256 96a176 176 0 1 0 176 176A176 176 0 0 0 256 96z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
  )
}