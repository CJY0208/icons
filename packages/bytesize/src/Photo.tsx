import React from 'react'

export default function Photo({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 24l-8-8L2 26V2h28v22m-14-4l6-6l8 8v8H2v-6"/><circle cx="10" cy="9" r="3"/></g></svg>
  )
}