import React from 'react'

export default function GitCompareSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M209 384h-37a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h37v55.21L294.39 416L209 328.79zM113 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32z" fill="currentColor"/><path d="M432 360.61V156a92.1 92.1 0 0 0-92-92h-35V9.93L217.14 96L305 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0zM400 448a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"/></svg>
  )
}