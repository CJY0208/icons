import React from 'react'

export default function Infinite({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48"/><path d="M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="48"/></svg>
  )
}