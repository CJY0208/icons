import React from 'react'

export default function MdSend({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z" fill="currentColor"/></svg>
  )
}