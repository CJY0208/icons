import React from 'react'

export default function PlaySkipBackSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z" fill="currentColor"/></svg>
  )
}