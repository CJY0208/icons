import React from 'react'

export default function VideocamOffOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="32" strokeLinejoin="round" d="M374.79 308.78L457.5 367a16 16 0 0 0 22.5-14.62V159.62A16 16 0 0 0 457.5 145l-82.71 58.22A16 16 0 0 0 368 216.3v79.4a16 16 0 0 0 6.79 13.08z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="32" strokeMiterlimit="10" d="M50.19 140.57A51.94 51.94 0 0 0 32 180v152a52.15 52.15 0 0 0 52 52h184a51.6 51.6 0 0 0 22-4.9"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="32" strokeMiterlimit="10" d="M208 128h60.48A51.68 51.68 0 0 1 320 179.52V248"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="32" strokeMiterlimit="10" d="M416 416L80 80"/></svg>
  )
}