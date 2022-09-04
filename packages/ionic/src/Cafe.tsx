import React from 'react'

export default function Cafe({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M432 64H96a16 16 0 0 0-16 16v192a96.11 96.11 0 0 0 96 96h112a96.11 96.11 0 0 0 96-96v-80h18a62.07 62.07 0 0 0 62-62V96a32 32 0 0 0-32-32zm0 66a30 30 0 0 1-30 30h-18V96h48z" fill="currentColor"/><path d="M400 400H64a16 16 0 0 0 0 32h336a16 16 0 0 0 0-32z" fill="currentColor"/></svg>
  )
}