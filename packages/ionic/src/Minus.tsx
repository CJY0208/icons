import React from 'react'

export default function Minus({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 224h384v64H64z" fill="currentColor"/></svg>
  )
}