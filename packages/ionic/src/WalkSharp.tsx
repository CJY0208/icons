import React from 'react'

export default function WalkSharp({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`c-icon ${className}`}><path d="M315.09 481.38l-56.95-115.12l-45-57.56a73.11 73.11 0 0 1-10.16-37.17V142h15.73A40.36 40.36 0 0 1 259 182.32v162.52" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" fill="currentColor"/><path fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32" d="M128.18 291.5v-74.77l64.95-65.1"/><path d="M376.35 295.73l-83.95-56.38v-44.68l104.68 72.95l-20.73 28.11z" fill="currentColor"/><path d="M175.13 498.58l-21.43-26.91l80.33-81.54l15.53 32.07l-74.43 76.38z" fill="currentColor"/><circle cx="259.02" cy="67.21" r="37.38" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="16" fill="currentColor"/></svg>
  )
}