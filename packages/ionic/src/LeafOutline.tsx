import React from 'react'

export default function LeafOutline({ className = '', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props} className={`kl-icon ${className}`}><path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7c77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M173 253c86 81 175 129 292 147" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
  )
}