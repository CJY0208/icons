import React from 'react'

export default function CaretForwardSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M144 448l224-192L144 64v384z" fill="currentColor"/></svg>
  )
}