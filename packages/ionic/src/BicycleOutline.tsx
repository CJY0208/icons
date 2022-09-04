import React from 'react'

export default function BicycleOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M388 288a76 76 0 1 0 76 76a76.24 76.24 0 0 0-76-76z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M124 288a76 76 0 1 0 76 76a76.24 76.24 0 0 0-76-76z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 360v-86l-64-42l80-88l40 72h56"/><path d="M320 136a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 72a32 32 0 1 0-.2 64z" fill="currentColor"/></svg>
  )
}