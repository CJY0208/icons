import React from 'react'

export default function ArrowLeftA({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M64.5 256.5l192 192v-112h192v-160h-192v-112z" fill="currentColor"/></svg>
  )
}