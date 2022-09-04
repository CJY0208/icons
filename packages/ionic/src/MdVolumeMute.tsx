import React from 'react'

export default function MdVolumeMute({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z" fill="currentColor"/></svg>
  )
}