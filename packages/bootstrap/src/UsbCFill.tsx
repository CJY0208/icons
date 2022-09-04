import React from 'react'

export default function UsbCFill({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props} className={`kl-icon ${className}`}><g fill="currentColor"><path d="M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6H3zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z"/></g></svg>
  )
}