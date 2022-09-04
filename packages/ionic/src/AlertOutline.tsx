import React from 'react'

export default function AlertOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="256" cy="416" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}