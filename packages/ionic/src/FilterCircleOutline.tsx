import React from 'react'

export default function FilterCircleOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path fill="none" stroke="currentColor" strokeWidth="32" strokeMiterlimit="10" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z"/><path fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" d="M144 208h224"/><path fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" d="M176 272h160"/><path fill="none" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" d="M224 336h64"/></svg>
  )
}