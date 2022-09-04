import React from 'react'

export default function ChevronForwardCircleOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64S64 150 64 256z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M216 352l96-96l-96-96"/></svg>
  )
}