import React from 'react'

export default function MoveSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M176 112l80-80l80 80"/><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M255.98 32l.02 448"/><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M176 400l80 80l80-80"/><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M400 176l80 80l-80 80"/><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M112 176l-80 80l80 80"/><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M32 256h448"/></svg>
  )
}