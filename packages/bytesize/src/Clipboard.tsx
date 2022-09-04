import React from 'react'

export default function Clipboard({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 2v4h8V2h-8zm-1 2H6v26h20V4h-5"/></g></svg>
  )
}