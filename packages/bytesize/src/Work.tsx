import React from 'react'

export default function Work({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M30 8H2v18h28zM20 8s0-4-4-4s-4 4-4 4M8 26V8m16 18V8"/></g></svg>
  )
}