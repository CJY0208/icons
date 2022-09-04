import React from 'react'

export default function Move({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props} className={`kl-icon ${className}`}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 16h26M16 3v26M12 7l4-4l4 4m-8 18l4 4l4-4m5-13l4 4l-4 4M7 12l-4 4l4 4"/></g></svg>
  )
}