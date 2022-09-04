import React from 'react'

export default function JournalSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M290 32H104a24 24 0 0 0-24 24v400a24 24 0 0 0 24 24h186z" fill="currentColor"/><path d="M408 32h-58v448h58a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24z" fill="currentColor"/></svg>
  )
}