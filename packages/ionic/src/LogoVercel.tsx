import React from 'react'

export default function LogoVercel({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path fillRule="evenodd" d="M256 48l240 416H16z" fill="currentColor"/></svg>
  )
}