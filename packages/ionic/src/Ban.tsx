import React from 'react'

export default function Ban({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><circle fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="48" cx="256" cy="256" r="200"/><path stroke="currentColor" strokeMiterlimit="10" strokeWidth="48" d="M114.58 114.58l282.84 282.84" fill="currentColor"/></svg>
  )
}