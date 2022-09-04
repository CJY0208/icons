import React from 'react'

export default function MdCellular({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 448h384V64L64 448z" fill="currentColor"/></svg>
  )
}