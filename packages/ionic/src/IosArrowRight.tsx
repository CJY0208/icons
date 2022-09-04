import React from 'react'

export default function IosArrowRight({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="currentColor"/></svg>
  )
}