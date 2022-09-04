import React from 'react'

export default function StarHalfOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path d="M256 48v316L118 464l54-160l-140-96h172l52-160z" fill="currentColor"/></svg>
  )
}