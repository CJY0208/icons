import React from 'react'

export default function Medkit({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M336 64H176a16 16 0 0 0-16 16v16h192V80a16 16 0 0 0-16-16z" fill="none"/><path d="M432 96h-48V80a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v256a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V160a64.07 64.07 0 0 0-64-64zm-96 208h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32zm16-208H160V80a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16z" fill="currentColor"/></svg>
  )
}