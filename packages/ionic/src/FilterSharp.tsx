import React from 'react'

export default function FilterSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M16 120h480v48H16z" fill="currentColor"/><path d="M96 232h320v48H96z" fill="currentColor"/><path d="M192 344h128v48H192z" fill="currentColor"/></svg>
  )
}