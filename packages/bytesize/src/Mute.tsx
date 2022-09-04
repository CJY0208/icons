import React from 'react'

export default function Mute({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 16c0-8-5-14-5-14l-7 8H2v12h6l7 8s5-6 5-14z"/></g></svg>
  )
}