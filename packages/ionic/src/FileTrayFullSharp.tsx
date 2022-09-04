import React from 'react'

export default function FileTrayFullSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M128 128h256v38H128z" fill="currentColor"/><path d="M112 192h288v38H112z" fill="currentColor"/><path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316z" fill="currentColor"/></svg>
  )
}