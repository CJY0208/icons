import React from 'react'

export default function FlameOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M112 320c0-93 124-165 96-272c66 0 192 96 192 272a144 144 0 0 1-288 0z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80s40-86 32-128c42 0 96 70.29 96 128z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}