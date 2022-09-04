import React from 'react'

export default function StopOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><rect x="96" y="96" width="320" height="320" rx="24" ry="24" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}