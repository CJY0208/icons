import React from 'react'

export default function LogoStencil({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M188.8 334.07h197.33L279.47 448H83.2z" fill="currentColor"/><path d="M512 199H106.61L0 313h405.39z" fill="currentColor"/><path d="M232.2 64h196.6L322.62 177.93H125.87z" fill="currentColor"/></svg>
  )
}