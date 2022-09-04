import React from 'react'

export default function ArrowRightA({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M448.5 256.5l-192-192v112h-192v160h192v112z" fill="currentColor"/></svg>
  )
}