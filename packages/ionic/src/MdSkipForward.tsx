import React from 'react'

export default function MdSkipForward({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 64v384l277.3-192L64 64z" fill="currentColor"/><path d="M384 64h64v384h-64z" fill="currentColor"/></svg>
  )
}