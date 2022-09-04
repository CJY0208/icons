import React from 'react'

export default function SchoolSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M256 370.43L96 279v98.42l160 88.88l160-88.88V279l-160 91.43z" fill="currentColor"/><path d="M512.25 192L256 45.57L-.25 192L256 338.43l208-118.86V384h48V192.14l.25-.14z" fill="currentColor"/></svg>
  )
}