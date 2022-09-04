import React from 'react'

export default function Scan({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M342 444h46a56 56 0 0 0 56-56v-46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44"/><path d="M444 170v-46a56 56 0 0 0-56-56h-46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44"/><path d="M170 444h-46a56 56 0 0 1-56-56v-46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44"/><path d="M68 170v-46a56 56 0 0 1 56-56h46" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="44"/></svg>
  )
}