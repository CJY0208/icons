import React from 'react'

export default function MdArrowDropup({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M128 320l128-128 128 128z" fill="currentColor"/></svg>
  )
}