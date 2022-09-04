import React from 'react'

export default function CaretUpSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M448 368L256 144L64 368h384z" fill="currentColor"/></svg>
  )
}