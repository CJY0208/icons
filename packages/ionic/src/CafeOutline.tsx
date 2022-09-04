import React from 'react'

export default function CafeOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M368 80h64a16 16 0 0 1 16 16v34a46 46 0 0 1-46 46h-34" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M96 80h272v192a80 80 0 0 1-80 80H176a80 80 0 0 1-80-80V80h0z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M64 416h336"/></svg>
  )
}