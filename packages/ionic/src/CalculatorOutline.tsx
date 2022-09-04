import React from 'react'

export default function CalculatorOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><rect x="112" y="48" width="288" height="416" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160.01 112H352v64H160.01z"/><circle cx="168" cy="248" r="24" fill="currentColor"/><circle cx="256" cy="248" r="24" fill="currentColor"/><circle cx="344" cy="248" r="24" fill="currentColor"/><circle cx="168" cy="328" r="24" fill="currentColor"/><circle cx="256" cy="328" r="24" fill="currentColor"/><circle cx="168" cy="408" r="24" fill="currentColor"/><circle cx="256" cy="408" r="24" fill="currentColor"/><rect x="320" y="304" width="48" height="128" rx="24" ry="24" fill="currentColor"/></svg>
  )
}