import React from 'react'

export default function EllipsisVerticalCircleOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><circle cx="256" cy="256" r="26" fill="currentColor"/><circle cx="256" cy="346" r="26" fill="currentColor"/><circle cx="256" cy="166" r="26" fill="currentColor"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
  )
}