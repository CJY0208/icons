import React from 'react'

export default function ArrowUpA({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M256.5 64.5l-192 192h112v192h160v-192h112z" fill="currentColor"/></svg>
  )
}