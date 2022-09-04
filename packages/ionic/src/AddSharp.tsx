import React from 'react'

export default function AddSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M256 112v288"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M400 256H112"/></svg>
  )
}