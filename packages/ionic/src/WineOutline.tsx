import React from 'react'

export default function WineOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M398.57 80H113.43v16S87.51 272 256 272S398.57 96 398.57 96z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M256 272v160"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 432H160"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M112 160h288"/></svg>
  )
}