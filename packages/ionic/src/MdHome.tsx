import React from 'react'

export default function MdHome({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z" fill="currentColor"/></svg>
  )
}