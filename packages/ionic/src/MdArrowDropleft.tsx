import React from 'react'

export default function MdArrowDropleft({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M320 128L192 256l128 128z" fill="currentColor"/></svg>
  )
}