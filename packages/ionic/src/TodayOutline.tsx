import React from 'react'

export default function TodayOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><rect fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" x="48" y="80" width="416" height="384" rx="48"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" d="M128 48v32"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" d="M384 48v32"/><rect fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" x="112" y="224" width="96" height="96" rx="13"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" d="M464 160H48"/></svg>
  )
}