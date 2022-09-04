import React from 'react'

export default function ArrowDownA({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256.5 448.5l192-192h-112v-192h-160v192h-112z" fill="currentColor"/></svg>
  )
}