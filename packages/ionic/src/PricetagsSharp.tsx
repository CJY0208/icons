import React from 'react'

export default function PricetagsSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M288 16L0 304l176 176l288-288V16zm80 128a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"/><path d="M480 64v144L216.9 471.1L242 496l270-272V64h-32z" fill="currentColor"/></svg>
  )
}