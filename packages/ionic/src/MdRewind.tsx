import React from 'react'

export default function MdRewind({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M249.6 402V110L32 256l217.6 146zm12.8-146L480 402V110L262.4 256z" fill="currentColor"/></svg>
  )
}