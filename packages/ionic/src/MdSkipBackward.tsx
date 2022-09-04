import React from 'react'

export default function MdSkipBackward({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M170.7 256L448 448V64L170.7 256z" fill="currentColor"/><path d="M64 64h64v384H64z" fill="currentColor"/></svg>
  )
}